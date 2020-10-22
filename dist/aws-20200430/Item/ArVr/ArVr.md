# Ar Vr

```text
aws-20200430/Item/ArVr/ArVr
```

```text
include('aws-20200430/Item/ArVr/ArVr')
```

|icon|card|element|group|
|---|---|---|---|
|![](ArVr.png)|![](ArVr.card.png)|![](ArVr.element.png)|![](ArVr.group.png)|



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
' loads the ArVr element
include('aws-20200430/Item/ArVr/ArVr')
ArVrCard('ar_vr', 'Ar Vr', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ArVr element
include('aws-20200430/Item/ArVr/ArVr')
ArVrCard('ar_vr', 'Ar Vr', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ArVr element
include('aws-20200430/Item/ArVr/ArVr')
ArVr('ar_vr', 'Ar Vr', 'an optional tech field')
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
' loads the ArVr element
include('aws-20200430/Item/ArVr/ArVr')
ArVr('ar_vr', 'Ar Vr', 'an optional tech field')
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
' loads the ArVr element
include('aws-20200430/Item/ArVr/ArVr')
ArVrGroup('ar_vr', 'Ar Vr', 'an optional tech field'){
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
' loads the ArVr element
include('aws-20200430/Item/ArVr/ArVr')
ArVrGroup('ar_vr', 'Ar Vr', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

