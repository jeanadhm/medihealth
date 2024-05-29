# users/serializers.py
from rest_framework import serializers
from .models import Patient, Doctor

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ['nom', 'prenom', 'dateNaissance', 'adresse', 'email', 'numeroTelephone', 'password']

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ['nom', 'prenom', 'anneeNaissance', 'numIdentification', 'hopital', 'telHopital', 'adresseHopital', 'documentsVerification', 'email', 'password']
