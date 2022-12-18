from django.db import models
# from django.contrib.auth.models import User
from apps.users.models import User

# Create your models here.
class Nota(models.Model):
    # Opciones
    STATUS_CHOICES = (
        ('1', 'Pendiente'),
        ('2', 'En proceso'),
        ('3', 'Finalizado')
    )

    # Atributos
    title = models.CharField(
        max_length=100,
        unique=True,
        verbose_name='Titulo'
    )

    description = models.CharField(
        max_length=500,
        verbose_name='Descripcion'
    )

    status = models.CharField(
        max_length=1,
        choices=STATUS_CHOICES,
        verbose_name='Estado'
    )

    deadline = models.DateField(
        verbose_name='Fecha de Cierre'
    )

    creation_date = models.DateField(
        auto_now_add=True,
        verbose_name='Fecha de Creación'
    )

    user = models.ForeignKey(
        User,
        null=True, 
        related_name='user_nota',
        on_delete=models.CASCADE
    )

    class Meta:
        verbose_name= 'Nota'
        verbose_name_plural = 'Notas'
        unique_together = ['user']
        ordering = ['id']


    def __str__(self):
        return self.title