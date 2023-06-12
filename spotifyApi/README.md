获取私人的数据需要通过客户端进行访问
如果只是单纯的访问一些公开的数据，需要使用token才可以访问的到。
我们应该将它们放进一个配置文件里面，然后使用全局变量，才能方便修改

第一步：注册app，获取client id/client
第二步：获取token access
curl -X POST "https://accounts.spotify.com/api/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=client_credentials&client_id=2420c111fd12499583b601fa4624a3d7&client_secret=70ccacae314e4c8b810aecdb35ec95be"

{"access_token":"BQDg3Hpj_YEFBUJ6VUNTmf5FbGvmhkFqLqPdvy4pwFaxKzhqRxYyBb5ht0Kh5_WKxewQZ7nRa50zZOJl_FmrbYNMLJVLEyko8VAKRkeg6H_VkxKBviY","token_type":"Bearer","expires_in":3600}%  

curl "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb" \
     -H "Authorization: Bearer  BQDg3Hpj_YEFBUJ6VUNTmf5FbGvmhkFqLqPdvy4pwFaxKzhqRxYyBb5ht0Kh5_WKxewQZ7nRa50zZOJl_FmrbYNMLJVLEyko8VAKRkeg6H_VkxKBviY"
