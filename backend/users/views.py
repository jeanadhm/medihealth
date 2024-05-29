from rest_framework import generics
from .models import Doctor, Patient
from .serializers import DoctorSerializer, PatientSerializer
from django.contrib.auth.hashers import make_password
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.decorators import api_view

class RegisterDoctorView(generics.CreateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        doctor_data = self.request.data
        doctor_data['password'] = make_password(doctor_data['password'])  # Hacher le mot de passe
        serializer.save(**doctor_data)

class RegisterPatientView(generics.CreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        patient_data = self.request.data
        patient_data['password'] = make_password(patient_data['password'])  # Hacher le mot de passe
        serializer.save(**patient_data)


@api_view(['GET'])
def list_doctors(request):
    doctors = Doctor.objects.all()
    serializer = DoctorSerializer(doctors, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def list_patients(request):
    patients = Patient.objects.all()
    serializer = PatientSerializer(patients, many=True)
    return Response(serializer.data)