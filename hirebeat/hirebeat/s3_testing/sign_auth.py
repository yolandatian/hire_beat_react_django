import mimetypes
import boto
import boto3
import json
from django.http import HttpResponse

# s3 = boto3.resource('s3')

# s3.Bucket('hirebeat-videos').put_object(Key="test",Body=data)



conn = boto.connect_s3('', '')

def sign_s3_upload(request):
    object_name = request.GET['objectName']
    content_type = mimetypes.guess_type(object_name)[0]
    print(content_type)

    signed_url = conn.generate_url(
        300,
        "PUT",
        'hirebeat-videos',
        'videos' + object_name,
        headers = {'Content-Type': content_type, 'x-amz-acl':'public-read'})

    return HttpResponse(json.dumps({'signedUrl': signed_url}))