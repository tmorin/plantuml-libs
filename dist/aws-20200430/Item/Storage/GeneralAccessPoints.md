# General Access Points

```text
aws-20200430/Item/Storage/GeneralAccessPoints
```

```text
include('aws-20200430/Item/Storage/GeneralAccessPoints')
```

|icon|card|element|group|
|---|---|---|---|
|![](GeneralAccessPoints.png)|![](GeneralAccessPoints.card.png)|![](GeneralAccessPoints.element.png)|![](GeneralAccessPoints.group.png)|



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
' loads the GeneralAccessPoints element
include('aws-20200430/Item/Storage/GeneralAccessPoints')
GeneralAccessPointsCard('general_access_points', 'General Access Points', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the GeneralAccessPoints element
include('aws-20200430/Item/Storage/GeneralAccessPoints')
GeneralAccessPointsCard('general_access_points', 'General Access Points', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the GeneralAccessPoints element
include('aws-20200430/Item/Storage/GeneralAccessPoints')
GeneralAccessPoints('general_access_points', 'General Access Points', 'an optional tech field')
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
' loads the GeneralAccessPoints element
include('aws-20200430/Item/Storage/GeneralAccessPoints')
GeneralAccessPoints('general_access_points', 'General Access Points', 'an optional tech field')
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
' loads the GeneralAccessPoints element
include('aws-20200430/Item/Storage/GeneralAccessPoints')
GeneralAccessPointsGroup('general_access_points', 'General Access Points', 'an optional tech field'){
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
' loads the GeneralAccessPoints element
include('aws-20200430/Item/Storage/GeneralAccessPoints')
GeneralAccessPointsGroup('general_access_points', 'General Access Points', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

