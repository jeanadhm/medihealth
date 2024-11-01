from rest_framework.views import APIView
from rest_framework import generics
from rest_framework import status
from rest_framework import viewsets
from .models import Doctor, Patient, RendezVous
from .serializers import DoctorSerializer, PatientSerializer, RendezVousSerializer
from django.contrib.auth.hashers import make_password
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, login

from django.http import JsonResponse


class RegisterDoctorView(generics.CreateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        doctor_data = self.request.data
        doctor_data['password'] = make_password(doctor_data['password'])  # Hachage du mot de passe
        serializer.save(**doctor_data)

class RegisterPatientView(generics.CreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        patient_data = self.request.data
        patient_data['password'] = make_password(patient_data['password'])  # Hachage du mot de passe
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


class PatientLoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        user = authenticate(email=email, password=password)

        if user and user.is_active:
            # Connexion réussie
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
        else:
            # Échec de la connexion
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class DoctorLoginView(APIView):
    """Vue de connexion pour les docteurs, utilisant la méthode POST."""

    @api_view(['POST'])  # Autorise uniquement les requêtes POST
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        user = authenticate(email=email, password=password)

        if user and user.is_active:
            # Connexion réussie
            return JsonResponse({'message': 'Connexion réussie'}, status=status.HTTP_200_OK)
        else:
            # Échec de la connexion
            return JsonResponse({'error': 'Identifiants invalides'}, status=status.HTTP_401_UNAUTHORIZED)

class RendezVousViewSet(viewsets.ModelViewSet):
    queryset = RendezVous.objects.all()
    serializer_class = RendezVousSerializer

    def create(self, request, *args, **kwargs):
        patient_name = request.data.get('patientName')  # Récupérer le nom du patient
        date = request.data.get('date')
        time = request.data.get('time')
        instructions = request.data.get('instructions')

        # Créer une instance de rendez-vous
        rendez_vous = RendezVous.objects.create(
            patient_name=patient_name,  # Assurez-vous que le champ existe dans votre modèle
            date=date,
            time=time,
            instructions=instructions
        )
        
        # Serialize et renvoyer la réponse
        serializer = self.get_serializer(rendez_vous)
        return Response(serializer.data, status=201)
