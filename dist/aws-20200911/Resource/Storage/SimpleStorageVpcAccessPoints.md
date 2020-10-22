# Simple Storage Vpc Access Points

```text
aws-20200911/Resource/Storage/SimpleStorageVpcAccessPoints
```

```text
include('aws-20200911/Resource/Storage/SimpleStorageVpcAccessPoints')
```

|icon|card|element|group|
|---|---|---|---|
|![](SimpleStorageVpcAccessPoints.png)|![](SimpleStorageVpcAccessPoints.card.png)|![](SimpleStorageVpcAccessPoints.element.png)|![](SimpleStorageVpcAccessPoints.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the SimpleStorageVpcAccessPoints element
include('aws-20200911/Resource/Storage/SimpleStorageVpcAccessPoints')
SimpleStorageVpcAccessPointsCard('simple_storage_vpc_access_points', 'Simple Storage Vpc Access Points', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the SimpleStorageVpcAccessPoints element
include('aws-20200911/Resource/Storage/SimpleStorageVpcAccessPoints')
SimpleStorageVpcAccessPointsCard('simple_storage_vpc_access_points', 'Simple Storage Vpc Access Points', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the SimpleStorageVpcAccessPoints element
include('aws-20200911/Resource/Storage/SimpleStorageVpcAccessPoints')
SimpleStorageVpcAccessPoints('simple_storage_vpc_access_points', 'Simple Storage Vpc Access Points', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the SimpleStorageVpcAccessPoints element
include('aws-20200911/Resource/Storage/SimpleStorageVpcAccessPoints')
SimpleStorageVpcAccessPoints('simple_storage_vpc_access_points', 'Simple Storage Vpc Access Points', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the SimpleStorageVpcAccessPoints element
include('aws-20200911/Resource/Storage/SimpleStorageVpcAccessPoints')
SimpleStorageVpcAccessPointsGroup('simple_storage_vpc_access_points', 'Simple Storage Vpc Access Points', 'an optional tech field'){
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the SimpleStorageVpcAccessPoints element
include('aws-20200911/Resource/Storage/SimpleStorageVpcAccessPoints')
SimpleStorageVpcAccessPointsGroup('simple_storage_vpc_access_points', 'Simple Storage Vpc Access Points', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

