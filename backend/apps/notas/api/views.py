# from django.shortcuts import render --> Nativo de Django.

# Rest imports
from rest_framework.views import APIView
from rest_framework.response import Response
# from rest_framework.permissions import IsAuthenticated

from rest_framework import status

# Models imports
from apps.notas.models import Nota

# Serializer imports
from apps.notas.api.serializers import NotaSerializer

# Helpers
from apps.notas.helpers.notaErrors import existeNota

# Create your views here.

class NotaApiView(APIView):
    # permission_classes = (IsAuthenticated, )
    def get(self, request):
        """Retorno un listado con todas las notas en la base"""
    
        print(f'REQUEST-DATA --> {request.data}')
        print(f'REQUEST-METHOD --> {request.method}')

        notas = Nota.objects.all()
        notas_serializer = NotaSerializer(notas, many=True)
        print(notas_serializer)

        return Response(
            data=notas_serializer.data,
            status=status.HTTP_200_OK
        )

    # def post(self, request):
    #     """Crea un nuevo registro/nota """
    #     serializer = NotaSerializer(data=request.data)
    #     # print(serializer.type())
    #     print(serializer)

    #     if serializer.is_valid():
    #         serializer.save()

    #         data = {
    #             'message': 'La nota fue creada de forma correcta'
    #         }
    #         return Response(
    #             data=data,
    #             status=status.HTTP_201_CREATED
    #         )
    #     return Response(
    #         data=serializer.errors,
    #         status=status.HTTP_400_BAD_REQUEST

    #     )

class CreateNotaApiView(APIView): 
    # permission_classes = (IsAuthenticated, )
    def post(self, request):
        """Crea un nuevo registro/nota """
        serializer = NotaSerializer(data=request.data)
        # print(serializer.type())
        print(serializer)

        if serializer.is_valid():
            serializer.save()

            data = {
                'message': 'La nota fue creada de forma correcta'
            }
            return Response(
                data=data,
                status=status.HTTP_201_CREATED
            )
        return Response(
            data=serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

class NotaDetailApiView(APIView):
    # permission_classes = (IsAuthenticated, )
    def get(self, request, pk):
        """Nos retorna mas info de una Nota en particular"""

        try:
            nota = Nota.objects.get(pk=pk)
            print(f'Get del ORM -> {nota}')
            nota_serializer = NotaSerializer(nota)
            print(f'nota_serializer -> {nota_serializer.data}')

            return Response(
                data=nota_serializer.data,
                status=status.HTTP_200_OK
            )
        except: 
            data = {
                'message': 'Nota no encontrado'
            }
            return Response(
                data=data,
                status=status.HTTP_400_BAD_REQUEST
            ) 

    def put(self, request, pk):
        """Modificar registro"""

        nota = existeNota(pk)
        print('nota', nota)
        if nota[0]:
            # nota = Nota.objects.get(id=pk)

            nota_serializer = NotaSerializer(nota[1], data=request.data)

            if nota_serializer.is_valid():
                nota_serializer.save()

                data = {
                    'message': 'La nota fue modificada de forma correcta'
                }
                return Response(
                    data=data,
                    status=status.HTTP_200_OK
                )
        return Response(
            data=nota_serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )

    def delete(self, request, pk):
        """Eliminar un registro"""

        nota = Nota.objects.get(id=pk)
        nota.delete()

        data = {
            'message': 'La nota fue eliminada de forma correcta'
        }
        return Response(
            data=data,
            status=status.HTTP_200_OK
        )
