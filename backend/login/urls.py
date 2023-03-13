from django.urls import path
from .views import MemberViewSet, ShippingAddressViewSet
from rest_framework.routers import SimpleRouter

router = SimpleRouter()

router.register('', MemberViewSet, basename='members')
router.register('', ShippingAddressViewSet, basename='shipping_addresses')

urlpatterns = router.urls
