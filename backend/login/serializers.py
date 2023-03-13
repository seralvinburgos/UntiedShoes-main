from rest_framework.serializers import ModelSerializer
from .models import Role, ShippingAddress, Member


class RoleSerializer(ModelSerializer):
    class Meta:
        model = Role
        fields = '__all__'


class ShippingAddressSerializer(ModelSerializer):
    class Meta:
        model = ShippingAddress
        fields = '__all__'


class MemberSerializer(ModelSerializer):
    def create(self, validated_data):
        password = validated_data.pop('password')
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = Member
        fields = '__all__'
