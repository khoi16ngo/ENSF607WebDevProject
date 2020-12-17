from rest_framework import serializers
from .models import CourseOutline

class CourseOutlineSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseOutline
        fields = ('courseId','courseName','courseDescription','hours','courseCredit',
                    'reference','learningOutcomes','gradeComponents','letterGrades')