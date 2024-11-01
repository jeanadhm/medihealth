from django.db import models

class Patient(models.Model):
    id = models.AutoField(primary_key=True)
    nom = models.CharField(max_length=100, null=True, blank=True)
    prenom = models.CharField(max_length=100, null=True, blank=True)
    dateNaissance = models.DateField(null=True, blank=True)
    adresse = models.TextField(null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    numeroTelephone = models.CharField(max_length=20, null=True, blank=True)
    password = models.CharField(max_length=128, default='')

class Doctor(models.Model):
    id = models.AutoField(primary_key=True)
    nom = models.CharField(max_length=100, null=True, blank=True)
    prenom = models.CharField(max_length=100, null=True, blank=True)
    anneeNaissance = models.IntegerField(null=True, blank=True)
    numIdentification = models.CharField(max_length=100, null=True, blank=True)
    hopital = models.CharField(max_length=100, null=True, blank=True)
    telHopital = models.CharField(max_length=20, null=True, blank=True)
    adresseHopital = models.TextField(null=True, blank=True)
    documentsVerification = models.FileField(upload_to='documents/', null=True)
    email = models.EmailField(null=True, blank=True)
    password = models.CharField(max_length=128, default='')

class RendezVous(models.Model):
    patient_name = models.CharField(max_length=100)  # Champ pour le nom du patient
    date = models.DateField()
    time = models.TimeField()
    instructions = models.TextField()

    def __str__(self):
        return f"{self.patient_name} - {self.date} {self.time}"