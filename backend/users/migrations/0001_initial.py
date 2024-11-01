# Generated by Django 4.2.6 on 2024-07-02 10:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Doctor',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nom', models.CharField(blank=True, max_length=100, null=True)),
                ('prenom', models.CharField(blank=True, max_length=100, null=True)),
                ('anneeNaissance', models.IntegerField(blank=True, null=True)),
                ('numIdentification', models.CharField(blank=True, max_length=100, null=True)),
                ('hopital', models.CharField(blank=True, max_length=100, null=True)),
                ('telHopital', models.CharField(blank=True, max_length=20, null=True)),
                ('adresseHopital', models.TextField(blank=True, null=True)),
                ('documentsVerification', models.FileField(null=True, upload_to='documents/')),
                ('email', models.EmailField(blank=True, max_length=254, null=True)),
                ('password', models.CharField(default='', max_length=128)),
            ],
        ),
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nom', models.CharField(blank=True, max_length=100, null=True)),
                ('prenom', models.CharField(blank=True, max_length=100, null=True)),
                ('dateNaissance', models.DateField(blank=True, null=True)),
                ('adresse', models.TextField(blank=True, null=True)),
                ('email', models.EmailField(blank=True, max_length=254, null=True)),
                ('numeroTelephone', models.CharField(blank=True, max_length=20, null=True)),
                ('password', models.CharField(default='', max_length=128)),
            ],
        ),
    ]
