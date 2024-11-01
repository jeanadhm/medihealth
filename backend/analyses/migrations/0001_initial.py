# Generated by Django 4.2.6 on 2024-07-02 10:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CholesterolAnalysis',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('patientname', models.CharField(default='')),
                ('chol_total', models.FloatField()),
                ('chol_hdl', models.FloatField()),
                ('chol_ldl', models.FloatField()),
                ('chol_triglycerides', models.FloatField()),
                ('date', models.DateField()),
                ('result_positive', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='CommonAnalysis',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('patientname', models.CharField(default='')),
                ('red_blood_cells', models.FloatField()),
                ('white_blood_cells', models.FloatField()),
                ('platelets', models.FloatField()),
                ('hemoglobin', models.FloatField()),
                ('hematocrit', models.FloatField()),
                ('date', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='DiabetesAnalysis',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('patientname', models.CharField(default='')),
                ('diabete_glucose', models.FloatField()),
                ('diabete_hba1c', models.FloatField()),
                ('date', models.DateField()),
                ('result_positive', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='IstAnalysis',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('patientname', models.CharField(default='')),
                ('ist_vih', models.CharField(max_length=50)),
                ('ist_syphilis', models.CharField(max_length=50)),
                ('date', models.DateField()),
                ('result_positive', models.BooleanField()),
            ],
        ),
    ]
