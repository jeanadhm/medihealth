from rest_framework import generics
from .models import CommonAnalysis, CholesterolAnalysis, IstAnalysis, DiabetesAnalysis
from .serializers import CommonAnalysisSerializer, CholesterolAnalysisSerializer, IstAnalysisSerializer, DiabetesAnalysisSerializer

class CommonAnalysisCreateView(generics.CreateAPIView):
    queryset = CommonAnalysis.objects.all()
    serializer_class = CommonAnalysisSerializer

class CholesterolAnalysisCreateView(generics.CreateAPIView):
    queryset = CholesterolAnalysis.objects.all()
    serializer_class = CholesterolAnalysisSerializer

class IstAnalysisCreateView(generics.CreateAPIView):
    queryset = IstAnalysis.objects.all()
    serializer_class = IstAnalysisSerializer

class DiabetesAnalysisCreateView(generics.CreateAPIView):
    queryset = DiabetesAnalysis.objects.all()
    serializer_class = DiabetesAnalysisSerializer
