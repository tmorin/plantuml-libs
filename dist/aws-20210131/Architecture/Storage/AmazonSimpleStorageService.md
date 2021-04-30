# Amazon Simple Storage Service

```text
aws-20210131/Architecture/Storage/AmazonSimpleStorageService
```

```text
include('aws-20210131/Architecture/Storage/AmazonSimpleStorageService')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonSimpleStorageService.png)|![](AmazonSimpleStorageService.card.png)|![](AmazonSimpleStorageService.element.png)|![](AmazonSimpleStorageService.group.png)|



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
' loads the AmazonSimpleStorageService element
include('aws-20210131/Architecture/Storage/AmazonSimpleStorageService')
AmazonSimpleStorageServiceCard('amazon_simple_storage_service', 'Amazon Simple Storage Service', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonSimpleStorageService element
include('aws-20210131/Architecture/Storage/AmazonSimpleStorageService')
AmazonSimpleStorageServiceCard('amazon_simple_storage_service', 'Amazon Simple Storage Service', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonSimpleStorageService element
include('aws-20210131/Architecture/Storage/AmazonSimpleStorageService')
AmazonSimpleStorageService('amazon_simple_storage_service', 'Amazon Simple Storage Service', 'an optional tech field')
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
' loads the AmazonSimpleStorageService element
include('aws-20210131/Architecture/Storage/AmazonSimpleStorageService')
AmazonSimpleStorageService('amazon_simple_storage_service', 'Amazon Simple Storage Service', 'an optional tech field')
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
' loads the AmazonSimpleStorageService element
include('aws-20210131/Architecture/Storage/AmazonSimpleStorageService')
AmazonSimpleStorageServiceGroup('amazon_simple_storage_service', 'Amazon Simple Storage Service', 'an optional tech field'){
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
' loads the AmazonSimpleStorageService element
include('aws-20210131/Architecture/Storage/AmazonSimpleStorageService')
AmazonSimpleStorageServiceGroup('amazon_simple_storage_service', 'Amazon Simple Storage Service', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

