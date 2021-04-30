# Amazon Cloud Front

```text
aws-20210131/Architecture/NetworkingContent/AmazonCloudFront
```

```text
include('aws-20210131/Architecture/NetworkingContent/AmazonCloudFront')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonCloudFront.png)|![](AmazonCloudFront.card.png)|![](AmazonCloudFront.element.png)|![](AmazonCloudFront.group.png)|



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
' loads the AmazonCloudFront element
include('aws-20210131/Architecture/NetworkingContent/AmazonCloudFront')
AmazonCloudFrontCard('amazon_cloud_front', 'Amazon Cloud Front', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonCloudFront element
include('aws-20210131/Architecture/NetworkingContent/AmazonCloudFront')
AmazonCloudFrontCard('amazon_cloud_front', 'Amazon Cloud Front', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonCloudFront element
include('aws-20210131/Architecture/NetworkingContent/AmazonCloudFront')
AmazonCloudFront('amazon_cloud_front', 'Amazon Cloud Front', 'an optional tech field')
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
' loads the AmazonCloudFront element
include('aws-20210131/Architecture/NetworkingContent/AmazonCloudFront')
AmazonCloudFront('amazon_cloud_front', 'Amazon Cloud Front', 'an optional tech field')
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
' loads the AmazonCloudFront element
include('aws-20210131/Architecture/NetworkingContent/AmazonCloudFront')
AmazonCloudFrontGroup('amazon_cloud_front', 'Amazon Cloud Front', 'an optional tech field'){
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
' loads the AmazonCloudFront element
include('aws-20210131/Architecture/NetworkingContent/AmazonCloudFront')
AmazonCloudFrontGroup('amazon_cloud_front', 'Amazon Cloud Front', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

