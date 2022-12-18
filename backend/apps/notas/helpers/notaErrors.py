# Models imports
from apps.notas.models import Nota

def existeNota(pk):
    print("Estoy en la función")
    try: 
        nota = Nota.objects.get(id=pk)
        return [True, nota]
    except:
        return False
