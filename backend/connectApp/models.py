from django.db import models

# Create your models here.


class Connect(models.Model):
    posted=models.DateTimeField(auto_now_add=True)
    text=models.TextField()
    email=models.EmailField(primary_key=True)