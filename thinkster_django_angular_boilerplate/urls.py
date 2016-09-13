from rest_framework import routers

from django.conf.urls import patterns, url, include

from authentication.views import AccountViewSet

from thinkster_django_angular_boilerplate.views import IndexView


router = routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)

urlpatterns = patterns(
    '',
    url(r'^api/v1/', include(router.urls)),

    url('^.*$', IndexView.as_view(), name='index'),
)
