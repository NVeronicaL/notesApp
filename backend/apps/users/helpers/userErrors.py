# Models imports
from apps.users.models import User

def existeUser(pk):
    print("Estoy en la función")
    try: 
        user = User.objects.get(id=pk)
        return [True, user]
    except:
        return False
