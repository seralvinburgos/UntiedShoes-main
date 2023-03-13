# import shoe models
from .models import Shoe, ShoeType, ShoeColor, Brand

# import shoe serializers
from .serializers import ShoeSerializer, ShoeTypeSerializer, BrandSerializer
from django.shortcuts import get_object_or_404

from rest_framework import viewsets
from django.http import HttpResponse
from rest_framework.exceptions import PermissionDenied
from rest_framework.response import Response
from django.http.response import HttpResponseBadRequest, HttpResponseNotFound
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import exception_handler


class ShoeViewSet(viewsets.ModelViewSet):
    queryset = Shoe.objects.all()
    serializer_class = ShoeSerializer
    http_method_names = ['get', 'post', 'put', 'delete']

    def list(self, request):
        queryset = Shoe.objects.all()
        serializer = ShoeSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Shoe.objects.all()
        try:
            shoe = get_object_or_404(queryset, pk=pk)
        except ValueError:
            return HttpResponseBadRequest("Invalid shoe id")

        serializer = ShoeSerializer(shoe)
        return Response(serializer.data)

    def create(self, request):
        serializer = ShoeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def update(self, request, pk=None):
        shoe = Shoe.objects.get(pk=pk)
        serializer = ShoeSerializer(shoe, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def destroy(self, request, pk=None):
        shoe = Shoe.objects.get(pk=pk)
        shoe.delete()
        return Response('Shoe deleted.')

    @action(detail=False, methods=['get'], url_name='by-color', url_path='color/(?P<id>\w+)')
    def shoe_color(self, request, *args, **kwargs):
        if not "id" in kwargs or not kwargs["id"]:
            return HttpResponseBadRequest("Color is required")

        shoe_color = kwargs["id"]

        try:
            queryset = Shoe.objects.filter(color=shoe_color)
        except ValueError:
            queryset = Shoe.objects.filter(color__name=shoe_color)

        if queryset.count() == 0:
            return HttpResponseNotFound("No shoes found for this color")

        serializer = ShoeSerializer(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'], url_name='get-types', url_path='types')
    def get_shoe_types(self, request, *args, **kwargs):
        queryset = ShoeType.objects.all()
        serializer = ShoeTypeSerializer(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'], url_name='by-type', url_path='type/(?P<id>\w+)')
    def shoe_types(self, request, *args, **kwargs):
        if not "id" in kwargs or not kwargs["id"]:
            return HttpResponseBadRequest("Type is required")

        shoe_type = kwargs["id"]

        try:
            queryset = Shoe.objects.filter(shoe_type=shoe_type)
        except ValueError:
            queryset = Shoe.objects.filter(shoe_type__style=shoe_type)

        if queryset.count() == 0:
            return HttpResponseNotFound("No shoes found for this type")

        serializer = ShoeSerializer(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'], url_name='by-gender', url_path='gender/(?P<id>\w+)')
    def shoe_gender(self, request, *args, **kwargs):
        if not "id" in kwargs or not kwargs["id"]:
            return HttpResponseBadRequest("You should specify the gender")

        shoe_gender = kwargs["id"]

        try:
            queryset = Shoe.objects.filter(gender=shoe_gender)
        except ValueError:
            queryset = Shoe.objects.filter(gender__name=shoe_gender)

        if queryset.count() == 0:
            return HttpResponseNotFound("No shoes found for this gender")

        return Response(ShoeSerializer(queryset, many=True).data)

    @action(detail=False, methods=['get'], url_name='get-brands', url_path='brands')
    def get_shoe_brands(self, request, *args, **kwargs):
        queryset = Brand.objects.all()
        serializer = BrandSerializer(queryset, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'], url_name='by-brand', url_path='brand/(?P<id>\w+)')
    def shoe_brand(self, request, *args, **kwargs):
        if not "id" in kwargs or not kwargs["id"]:
            return HttpResponseBadRequest("You should specify the brand")

        shoe_brand = kwargs["id"]

        try:
            queryset = Shoe.objects.filter(brand=shoe_brand)
        except ValueError:
            queryset = Shoe.objects.filter(brand__name=shoe_brand)

        if queryset.count() == 0:
            return HttpResponseNotFound("No shoes found for this brand")

        return Response(ShoeSerializer(queryset, many=True).data)
