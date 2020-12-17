from django.db import models
# from jsonfield import JSONField
import jsonfield

# Create your models here.
class CourseOutline(models.Model):
    courseId = models.CharField(max_length=10,default='ENSF 607')
    courseName = models.CharField(max_length=40,default='random course')
    courseDescription = models.CharField(max_length=100,default='etc')
    hours = models.CharField(max_length=1,default='6')
    courseCredit = models.CharField(max_length=1,default='3')
    reference = models.CharField(max_length=100,default='etc')
    # learningOutcomes = jsonfield.JSONField(null=True)
    # gradeComponents = jsonfield.JSONField(null=True)
    # letterGrades = jsonfield.JSONField(null=True)

    def __str__(self):
        return self.message