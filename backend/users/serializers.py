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

class PatientLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

class DoctorLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()