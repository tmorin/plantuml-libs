# Amazon Elasti Cache

```text
aws-20210131/Architecture/Database/AmazonElastiCache
```

```text
include('aws-20210131/Architecture/Database/AmazonElastiCache')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonElastiCache.png)|![](AmazonElastiCache.card.png)|![](AmazonElastiCache.element.png)|![](AmazonElastiCache.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonElastiCache element
include('aws-20210131/Architecture/Database/AmazonElastiCache')
AmazonElastiCacheCard('amazon_elasti_cache', 'Amazon Elasti Cache', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonElastiCache element
include('aws-20210131/Architecture/Database/AmazonElastiCache')
AmazonElastiCacheCard('amazon_elasti_cache', 'Amazon Elasti Cache', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonElastiCache element
include('aws-20210131/Architecture/Database/AmazonElastiCache')
AmazonElastiCache('amazon_elasti_cache', 'Amazon Elasti Cache', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonElastiCache element
include('aws-20210131/Architecture/Database/AmazonElastiCache')
AmazonElastiCache('amazon_elasti_cache', 'Amazon Elasti Cache', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonElastiCache element
include('aws-20210131/Architecture/Database/AmazonElastiCache')
AmazonElastiCacheGroup('amazon_elasti_cache', 'Amazon Elasti Cache', 'an optional tech field'){
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonElastiCache element
include('aws-20210131/Architecture/Database/AmazonElastiCache')
AmazonElastiCacheGroup('amazon_elasti_cache', 'Amazon Elasti Cache', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

