# serverless-image-download-api

- The pre-signed URL will be expired in 60 sec.
- In this project, [Custom Authorizer Lambda Function](https://github.com/palmseung/serverless-jwt-authorizer) is used to authorize a request.
- To download a file over 10MB, a pre-signedUrl is used to get URL to download a specific file in S3.

  ```
  Maximum payload to API gateway : 10 MB
  Maximum payload to Lambda : 6 MB (synchronous), 256 KB (asynchronous)
  ```





#### Reference
- [Pre-signed URL reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getSignedUrl-property) (search keyword : Expires)
- [API gateway reference](https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html) (search keyword : Payload size)
- [Lambda reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getSignedUrl-property) (search keyword : Invocation payload)
