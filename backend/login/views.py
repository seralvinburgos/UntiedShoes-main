# import models
from .models import Member, ShippingAddress, Role

# import serializers
from .serializers import MemberSerializer, ShippingAddressSerializer
from django.shortcuts import get_object_or_404

from django.contrib.auth.hashers import make_password
from rest_framework import viewsets
from django.http import HttpResponse
from rest_framework.exceptions import PermissionDenied, NotAcceptable
from rest_framework.response import Response
from django.http.response import HttpResponseBadRequest, HttpResponseNotFound
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from rest_framework.views import exception_handler

# Create your views here.


class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        user = request.user
        if not user.is_authenticated or not user.is_admin:
            raise PermissionDenied(
                'You do not have permission to perform this action.')
        request.data['role'] = Role.objects.get(name='member').id
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        member = serializer.save()
        return Response({
            "member": MemberSerializer(member, context=self.get_serializer_context()).data,
        })

    @action(detail=False, methods=['get'], url_path='me', url_name='me')
    def me(self, request):
        print(request.user)
        try:
            member = MemberSerializer(
                request.user, context=self.get_serializer_context()).data
            if member is None:
                raise NotAcceptable('You are not logged in.')
            return Response({
                "member": member,
            })
        except:
            raise NotAcceptable('You are not logged in.')


class ShippingAddressViewSet(viewsets.ModelViewSet):
    queryset = ShippingAddress.objects.all()
    serializer_class = ShippingAddressSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return ShippingAddress.objects.all()

    def get_object(self):
        return self.request.user

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        shipping_address = serializer.save()
        return Response({
            "shipping_address": ShippingAddressSerializer(shipping_address, context=self.get_serializer_context()).data,
        })

    @action(detail=False, methods=['get'])
    def me(self, request):
        return Response({
            "shipping_address": ShippingAddressSerializer(request.user, context=self.get_serializer_context()).data,
        })
