# Rest imports
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

# Serializers imports
from apps.users.api.serializers import (
    UserSerializer,
    UserListSerializer
)

# Models imports
from apps.users.models import User

# Helpers
from apps.users.helpers.userErrors import existeUser

class UserApiView(APIView):
    
    def get(self, request):
        """Retorno un listado con todos los usuarios en la base"""
    
        print(f'REQUEST-DATA --> {request.data}')
        print(f'REQUEST-METHOD --> {request.method}')

        users = User.objects.all().values('id', 'username', 'email', 'password')
        users_serializer = UserListSerializer(users, many=True)
        print(users_serializer)

        return Response(
            data=users_serializer.data,
            status=status.HTTP_200_OK
        )

class CreateUserApiView(APIView): 

    def post(self, request):
        """Crea un nuevo registro/user """

        user_serializer = UserSerializer(data=request.data, many=True)

        if user_serializer.is_valid():
            user_serializer.save()

            # data = {
            #     'message': 'El usuario fue creada de forma correcta'
            # }
            return Response(
                data=user_serializer.data,
                status=status.HTTP_201_CREATED
            )
        return Response(
            data=user_serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

class UserDetailApiView(APIView):

    def get(self, request, pk):
        """Nos retorna mas info de un User en particular"""

        # user = User.objects.get(pk=pk)
        user = existeUser(pk)
        print(f'Get del ORM -> {user}')

        if user[0]:
            user_serializer = UserSerializer(user[1])
            print(f'user_serializer -> {user_serializer.data}')

            return Response(
                data=user_serializer.data,
                status=status.HTTP_200_OK
            )

        data = {
            'message': 'User no encontrado'
        }
        return Response(
            data=data,
            status=status.HTTP_400_BAD_REQUEST
        ) 

    def put(self, request, pk):
        """Modificar registro"""

        user = existeUser(pk)
        print('user', user)
        if user[0]:
            user_serializer = UserSerializer(user[1], data=request.data)

            if user_serializer.is_valid():
                user_serializer.save()

                # data = {
                #     'message': 'El Usuario fue modificado de forma correcta'
                # }
                return Response(
                    data=user_serializer.data,
                    status=status.HTTP_200_OK
                )
        return Response(
            data=user_serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

    def delete(self, request, pk):
        """Eliminar un registro"""

        user = User.objects.get(id=pk)
        user.delete()

        data = {
            'message': 'Usuario eliminado correctamente'
        }
        return Response(
            data=data,
            status=status.HTTP_200_OK
        )