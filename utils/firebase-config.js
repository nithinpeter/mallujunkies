import firebase from 'firebase';

const serviceAccount = {
  "type": "service_account",
  "project_id": "mallujunkies",
  "private_key_id": "a897d1e47c49d083bd7e732475ebaec3f446b05a",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCHGGTTP5j2CgiW\nsusbovMEemuSwEFn30ptG12Gk8V87izBGT97qgBkfR+eQdSAqQzUjfiipYX9P4Dd\n+AL6MQjLMN4pYRgDm7gycZ0PBIoxs3oflVUSjVe27ZxuOwLvUAa97BF/iLV4yPH7\nzeHih8hIa2Girca3gLj7yKMKtO8dmp4LQI1ugyJn/Wrpllfx68qTndQcyquZ9HV4\nhoto4WciFVyvLWd1gmyR8iChrk91b8GN25nrmIJCFeSIEw8YD/JA3l8OkJiSZBKN\noU6oy+MtXgAI9d0f8evWUNAWXl+mUY2DPD+4BzATRCiBWdwY4fJVYLST9sT6zOKs\nnNVugPd1AgMBAAECggEBAIAzNfsCLzXM77mSsGnZiKSHR+5LY8Yer5I6ldZQBOk5\nXF8ihovkF9tEoeycq/wscHCFCZ3PVgeta6043hpuzdmE1k6ORSunanT0PAc0V7Ay\nkYHHRKQGXWbKtdglR/OyDbPNgg10vkGQ75H1HpbKI9YVkOG/5wPcs668B3zxlriP\nztsheKjZAJtkIPliAcphdo0Ztl8csnaFcf8LIp0C2smrosbnoW6DBa4tYMOVnVwx\n/ErNgJZCLFdQXKRbk7lS1RPxLtjcXIBDkG4lbgEsolyP4s1qdVll6pZKeLlF3cX+\nBxVotqq5J9DoWudaBYLthOqmitMdpNVNLaaYmLg4jAECgYEAzrmG+cMJHwI7aUBg\n414pUXPBqnHaHy+7rb0NlU9WBDyVx+SwttL+LIHyBFXDIP5dZho5byIwxoXpeyGA\nJs3mUFmw7q+tSRLs7IdeE/r5E6lmkPHCUl3QAgdKeHW+BGhJag7/DrWrO3ytDYXq\nuXPc3ZvItxvuUhy1Jx4PGo9cTOUCgYEAp0v+YrFlsHYBgtLi4te24LqhmTL+s7hu\nfMO3haRsASx4OC45FS26PRgF2EI1/sZN/fFjBp0is2XHKvIIXo4ajpP4RyqdR1hY\nDzrLk5BGLwqThq4IhhD8r4mnHKq1d/l8/LbCT9FcE6IMni13xqZj9Cf+pOmbjGjJ\naYt/kqCi51ECgYEAkPXAFHwTdU8XYiLmzglFZ/yIHYFgtuW98YLUd5L+elIRpe5T\njKA/4+3rS+bnwcccr3BMPgX3tf5JTzKarptLmaSLUZSXKtq+kM4Lxm8DIipz5cfh\nv+hQ6Fs8eWP3LxgCAwEpEaOKw1gV8ZmqkwkQI8YN5XkMkT/YN+n4JWPKEZECgYEA\nhtJAVKrf54CCITrwa50qHRtqhbrJ9m3oZJWZfZMPEzcSPzxI9l9emkOU2j4po4OO\ncNsqUbcqsuaPxnU8926Pyl1HFZsrGscAWG2qh+YaGWjtkPkJl3lzGcfWK80K53/h\nEQv7tjVjfdL3VjYQM7/+B1J/7cjxeQstXeh0y+a2wbECgYBlQomSDULzR4xmMkON\nO5iNwlMOukwBjG54iWVhdTpa9EUO8bGPZ3UJwSsbGfcdEvw2HMYKybAZE8QDoXgs\nOeUwxxc3WtWLetNOipPo+hxIS+5J/L0gAzohunn8VP6O8hQc4Ve9YlqJ9miiQ2bl\nuksJGdYfwLJB1XCzPTLCq5vAFw==\n-----END PRIVATE KEY-----\n",
  "client_email": "service-account@mallujunkies.iam.gserviceaccount.com",
  "client_id": "109836556411294991427",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://accounts.google.com/o/oauth2/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/service-account%40mallujunkies.iam.gserviceaccount.com"
}


const config = {
    apiKey: "AIzaSyDLBkPuhdeKogtFyBT8sTkYrVvIOst0D0U",
    authDomain: "mallujunkies.firebaseapp.com",
    databaseURL: "https://mallujunkies.firebaseio.com",
    storageBucket: "mallujunkies.appspot.com",
    serviceAccount: serviceAccount
};

const firebaseApp = firebase.initializeApp(config);

export { firebaseApp };