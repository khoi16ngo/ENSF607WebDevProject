# Generated by Django 3.1.4 on 2020-12-17 21:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_echo_gradecomponents'),
    ]

    operations = [
        migrations.AddField(
            model_name='echo',
            name='letterGrades',
            field=models.JSONField(null=True),
        ),
    ]