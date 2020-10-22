# Simple Storage General Access Points

```text
aws-20200911/Resource/Storage/SimpleStorageGeneralAccessPoints
```

```text
include('aws-20200911/Resource/Storage/SimpleStorageGeneralAccessPoints')
```

|icon|card|element|group|
|---|---|---|---|
|![](SimpleStorageGeneralAccessPoints.png)|![](SimpleStorageGeneralAccessPoints.card.png)|![](SimpleStorageGeneralAccessPoints.element.png)|![](SimpleStorageGeneralAccessPoints.group.png)|



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
' loads the SimpleStorageGeneralAccessPoints element
include('aws-20200911/Resource/Storage/SimpleStorageGeneralAccessPoints')
SimpleStorageGeneralAccessPointsCard('simple_storage_general_access_points', 'Simple Storage General Access Points', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the SimpleStorageGeneralAccessPoints element
include('aws-20200911/Resource/Storage/SimpleStorageGeneralAccessPoints')
SimpleStorageGeneralAccessPointsCard('simple_storage_general_access_points', 'Simple Storage General Access Points', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the SimpleStorageGeneralAccessPoints element
include('aws-20200911/Resource/Storage/SimpleStorageGeneralAccessPoints')
SimpleStorageGeneralAccessPoints('simple_storage_general_access_points', 'Simple Storage General Access Points', 'an optional tech field')
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
' loads the SimpleStorageGeneralAccessPoints element
include('aws-20200911/Resource/Storage/SimpleStorageGeneralAccessPoints')
SimpleStorageGeneralAccessPoints('simple_storage_general_access_points', 'Simple Storage General Access Points', 'an optional tech field')
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
' loads the SimpleStorageGeneralAccessPoints element
include('aws-20200911/Resource/Storage/SimpleStorageGeneralAccessPoints')
SimpleStorageGeneralAccessPointsGroup('simple_storage_general_access_points', 'Simple Storage General Access Points', 'an optional tech field'){
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
' loads the SimpleStorageGeneralAccessPoints element
include('aws-20200911/Resource/Storage/SimpleStorageGeneralAccessPoints')
SimpleStorageGeneralAccessPointsGroup('simple_storage_general_access_points', 'Simple Storage General Access Points', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

