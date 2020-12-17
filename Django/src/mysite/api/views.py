from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializers import CourseOutlineSerializer
from .models import CourseOutline
from rest_framework.views import APIView 
from rest_framework.response import Response 

class ReactView(APIView):
	queryset = CourseOutline.objects.all().order_by('id')
	serializer_class = CourseOutlineSerializer
	
	model=CourseOutline
	fields = ('courseId','courseName','courseDescription','hours','courseCredit',
                    'reference','learningOutcomes','gradeComponents','letterGrades')


	def get(self, request): 
		detail = [ {"courseId": detail.courseId,"courseName": detail.courseName,"courseDescription": detail.courseDescription,
		"hours":detail.hours,"courseCredit":detail.courseCredit,"reference":detail.reference,"learningOutcomes":detail.learningOutcomes,
		"gradeComponents":detail.gradeComponents,"letterGrades":detail.letterGrades} 
		for detail in CourseOutline.objects.all()] 
		return Response(detail) 

	def post(self, request): 

		serializer = CourseOutlineSerializer(data=request.data) 
		if serializer.is_valid(raise_exception=True): 
			serializer.save() 
			return Response(serializer.data) 

