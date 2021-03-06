# Generated by Django 2.2.7 on 2020-05-13 22:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Home',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('quote', models.CharField(max_length=220)),
                ('quote_author', models.CharField(max_length=100)),
                ('testimonial', models.CharField(max_length=1000)),
                ('testimonial_role', models.CharField(max_length=100)),
                ('testimonial_name', models.CharField(max_length=100)),
                ('testimonial_country', models.CharField(blank=True, max_length=100, null=True)),
            ],
        ),
    ]
