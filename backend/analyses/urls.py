from django.urls import path
from .views import CommonAnalysisCreateView, CholesterolAnalysisCreateView, IstAnalysisCreateView, DiabetesAnalysisCreateView

urlpatterns = [
    path('common/', CommonAnalysisCreateView.as_view(), name='common-create'),
    path('cholesterol/', CholesterolAnalysisCreateView.as_view(), name='cholesterol-create'),
    path('ist/', IstAnalysisCreateView.as_view(), name='ist-create'),
    path('diabetes/', DiabetesAnalysisCreateView.as_view(), name='diabetes-create'),
]
