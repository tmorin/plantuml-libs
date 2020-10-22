# Vpc Access Points

```text
aws-20200430/Item/Storage/VpcAccessPoints
```

```text
include('aws-20200430/Item/Storage/VpcAccessPoints')
```

|icon|card|element|group|
|---|---|---|---|
|![](VpcAccessPoints.png)|![](VpcAccessPoints.card.png)|![](VpcAccessPoints.element.png)|![](VpcAccessPoints.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the VpcAccessPoints element
include('aws-20200430/Item/Storage/VpcAccessPoints')
VpcAccessPointsCard('vpc_access_points', 'Vpc Access Points', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the VpcAccessPoints element
include('aws-20200430/Item/Storage/VpcAccessPoints')
VpcAccessPointsCard('vpc_access_points', 'Vpc Access Points', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the VpcAccessPoints element
include('aws-20200430/Item/Storage/VpcAccessPoints')
VpcAccessPoints('vpc_access_points', 'Vpc Access Points', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the VpcAccessPoints element
include('aws-20200430/Item/Storage/VpcAccessPoints')
VpcAccessPoints('vpc_access_points', 'Vpc Access Points', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the VpcAccessPoints element
include('aws-20200430/Item/Storage/VpcAccessPoints')
VpcAccessPointsGroup('vpc_access_points', 'Vpc Access Points', 'an optional tech field'){
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the VpcAccessPoints element
include('aws-20200430/Item/Storage/VpcAccessPoints')
VpcAccessPointsGroup('vpc_access_points', 'Vpc Access Points', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

