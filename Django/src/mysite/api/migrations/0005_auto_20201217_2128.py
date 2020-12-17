# Generated by Django 3.1.4 on 2020-12-17 21:28

from django.db import migrations
import jsonfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_echo_lettergrades'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='echo',
            name='gradeComponents',
        ),
        migrations.RemoveField(
            model_name='echo',
            name='letterGrades',
        ),
        migrations.AlterField(
            model_name='echo',
            name='learningOutcomes',
            field=jsonfield.fields.JSONField(null=True),
        ),
    ]