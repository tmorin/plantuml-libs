# Amazon Elastic Container Service

```text
aws-20210131/Architecture/Containers/AmazonElasticContainerService
```

```text
include('aws-20210131/Architecture/Containers/AmazonElasticContainerService')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonElasticContainerService.png)|![](AmazonElasticContainerService.card.png)|![](AmazonElasticContainerService.element.png)|![](AmazonElasticContainerService.group.png)|



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
' loads the AmazonElasticContainerService element
include('aws-20210131/Architecture/Containers/AmazonElasticContainerService')
AmazonElasticContainerServiceCard('amazon_elastic_container_service', 'Amazon Elastic Container Service', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonElasticContainerService element
include('aws-20210131/Architecture/Containers/AmazonElasticContainerService')
AmazonElasticContainerServiceCard('amazon_elastic_container_service', 'Amazon Elastic Container Service', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonElasticContainerService element
include('aws-20210131/Architecture/Containers/AmazonElasticContainerService')
AmazonElasticContainerService('amazon_elastic_container_service', 'Amazon Elastic Container Service', 'an optional tech field')
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
' loads the AmazonElasticContainerService element
include('aws-20210131/Architecture/Containers/AmazonElasticContainerService')
AmazonElasticContainerService('amazon_elastic_container_service', 'Amazon Elastic Container Service', 'an optional tech field')
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
' loads the AmazonElasticContainerService element
include('aws-20210131/Architecture/Containers/AmazonElasticContainerService')
AmazonElasticContainerServiceGroup('amazon_elastic_container_service', 'Amazon Elastic Container Service', 'an optional tech field'){
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
' loads the AmazonElasticContainerService element
include('aws-20210131/Architecture/Containers/AmazonElasticContainerService')
AmazonElasticContainerServiceGroup('amazon_elastic_container_service', 'Amazon Elastic Container Service', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

