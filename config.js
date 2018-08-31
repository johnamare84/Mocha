var config = {};

if( process.env.NODE_ENV == null )
    config.env = 'dev_1_0_02';
else
    config.env = process.env.NODE_ENV;

if( process.env.REGION == null )
    config.region = 'us-west-2';
else
    config.region = process.env.REGION;

if( process.env.CONTACT_EMAIL == null )
    config.contactEmail = 'zhanna.sudarska@j2.com';
else
    config.contactEmail = process.env.CONTACT_EMAIL;

config.timeout = 60000;

config.token = eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJyZWFkIiwid3JpdGUiXSwiZXhwIjoxNTMzMDU0OTI5LCJhdXRob3JpdGllcyI6WyJST0xFX0ZTVE9SIl0sImp0aSI6ImZmODlkOWMxLTUzMTctNDJhYS1iYTQxLTJlOTIwOTE5MzFkOCIsImNsaWVudF9pZCI6IjM5MzIifQ.LbK8FCEgQW1_aOiq7banU6jM1WGM-aIRH8EDBXI9rtkGwrQSvWuXwGu7TV9E-k5excWbYavxIlKnZrCuGROi_dIdQF46AXXbPitQpaUzKFJvKOpL4j-_hqlQK1AJrQpLPNllKkr7OXZB9FhMh_KDOSqPhKIvE7EKjUhg2Oaxy-CyG7OP0lwnkp6hR2CENguE_HfgA9TGN9TgKFdI0RZ28l24NMW9MreZxhsB-SSx5XlmMJ8KMrKNVNLJqF0hr_KRg13pW7LBEO2v5Rr6OaGQao1F4wxAPH36hUoACxiRrU3N4HlYLSAVZk615A4p-hupoHkfpAItP7DxbIWFzcFoQ;

config.password = 'PS6yg06T8rI59x8p';

config.url = {
    test:  'https://7yzxdpwe68.execute-api.us-west-2.amazonaws.com/test',
    dev:   'https://glky6kh2jk.execute-api.us-west-2.amazonaws.com/dev',
    devci: 'https://api.devci.securedocex.com',
    dev_1_0_02: 'https://485z0tqcs1.execute-api.us-west-2.amazonaws.com/dev',
    prod: 'https://7e8j4k6iod.execute-api.us-west-2.amazonaws.com/prod'
};

config.apiKey = {
    test:  'AzkPq4ZM6D6ogamFYWtXF1gYzbSeVxHz9dd1Ogq0',
    dev:   'iA5Qe2FSJJ8imotnwZuER7b3FbInHuM5aR8nVrAS',
    devci: 'LQzD9Ti0nl1i0D2lsN1258zJjw6ApOfw7d8UJB7B',
    dev_1_0_02: '4vkIcMYuO63H42I6Iq3uD9zXmQKI9HKL5XKRuqJe',
    prod: 'lWX3IHkgLr3THWZSIHJJ890EVgrDIuct4MCewhet'
};

config.handshakeHeaderName = 'x-handshake';
config.handshakeHeaderValue = 'zfHNuCaZZAEvFzoePBJK.acVLB10EuqCGW1HPJBBuYOA9m18vdWG';
config.handshakeAppId = '999';

module.exports = config;
