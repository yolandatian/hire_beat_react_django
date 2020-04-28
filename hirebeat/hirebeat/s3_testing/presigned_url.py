import boto3
from rest_framework.response import Response
from rest_framework.decorators import api_view, renderer_classes
from django.http import HttpRequest
from botocore.exceptions import ClientError
from botocore.client import Config

# using boto3 to generate a presigned url, works with VUploaderTest but got err: CORS err No 'Access-Control-Allow-Origin' header is present on the requested resource.
region = 'us-east-1'

@api_view(('GET',))
def sign_s3(request):
    s3_client = boto3.client('s3',endpoint_url=f'https://s3.{region}.amazonaws.com',
    config=Config(s3={'addressing_style': 'virtual'}))
    bucket_name = request.GET["bucket_name"]
    object_name = request.GET["object_name"]

    try:
        response = s3_client.generate_presigned_post(bucket_name,object_name,Fields=None,ExpiresIn=3600)
    except ClientError as e:
        logging.error(e)
        return None
    print("============ response of presigned url ===========")
    print(response)
    return Response(response)