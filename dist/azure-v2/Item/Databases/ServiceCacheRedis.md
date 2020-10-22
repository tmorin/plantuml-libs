# Service Cache Redis

```text
azure-v2/Item/Databases/ServiceCacheRedis
```

```text
include('azure-v2/Item/Databases/ServiceCacheRedis')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceCacheRedis.png)|![](ServiceCacheRedis.card.png)|![](ServiceCacheRedis.element.png)|![](ServiceCacheRedis.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceCacheRedis element
include('azure-v2/Item/Databases/ServiceCacheRedis')
ServiceCacheRedisCard('service_cache_redis', 'Service Cache Redis', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceCacheRedis element
include('azure-v2/Item/Databases/ServiceCacheRedis')
ServiceCacheRedisCard('service_cache_redis', 'Service Cache Redis', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceCacheRedis element
include('azure-v2/Item/Databases/ServiceCacheRedis')
ServiceCacheRedis('service_cache_redis', 'Service Cache Redis', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceCacheRedis element
include('azure-v2/Item/Databases/ServiceCacheRedis')
ServiceCacheRedis('service_cache_redis', 'Service Cache Redis', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceCacheRedis element
include('azure-v2/Item/Databases/ServiceCacheRedis')
ServiceCacheRedisGroup('service_cache_redis', 'Service Cache Redis', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceCacheRedis element
include('azure-v2/Item/Databases/ServiceCacheRedis')
ServiceCacheRedisGroup('service_cache_redis', 'Service Cache Redis', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

