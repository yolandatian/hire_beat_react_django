from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework import status
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer
from django.http import HttpRequest
import datetime
import hashlib
import hmac

@api_view(('GET',))
def sign_auth_view(request):
        to_sign = str(request.GET.get('to_sign','').encode('utf-8'))

        aws_secret = "ylPdUMLVSZZxZDbYHu8zM50kKhvrlNXQQQMLECU3"
        date_stamp = datetime.datetime.strptime(request.GET.get('datetime',''), '%Y%m%dT%H%M%SZ').strftime('%Y%m%d')
        region = "us-east-1"
        service = 's3'

        # Key derivation functions. See:
        # http://docs.aws.amazon.com/general/latest/gr/signature-v4-examples.html#signature-v4-examples-python
        def sign(key, msg):
            return hmac.new(key, msg.encode("utf-8"), hashlib.sha256).digest()

        def getSignatureKey(key, date_stamp, regionName, serviceName):
            kDate = sign(('AWS4' + key).encode('utf-8'), date_stamp)
            kRegion = sign(kDate, regionName)
            kService = sign(kRegion, serviceName)
            kSigning = sign(kService, 'aws4_request')
            return kSigning

        signing_key = getSignatureKey(aws_secret, date_stamp, region, service)

        # Sign to_sign using the signing_key
        signature = hmac.new(
            signing_key,
            to_sign.encode('utf-8'),
            hashlib.sha256
        ).hexdigest()

        response = Response(signature,status=status.HTTP_200_OK, headers={'Content-Type':"text/HTML"})
        #response.headers['Content-Type'] = "text/HTML"
        #response.out.write(signature)
        return response