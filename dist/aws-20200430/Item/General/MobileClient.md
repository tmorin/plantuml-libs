# Mobile Client

```text
aws-20200430/Item/General/MobileClient
```

```text
include('aws-20200430/Item/General/MobileClient')
```

|icon|card|element|group|
|---|---|---|---|
|![](MobileClient.png)|![](MobileClient.card.png)|![](MobileClient.element.png)|![](MobileClient.group.png)|



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
' loads the MobileClient element
include('aws-20200430/Item/General/MobileClient')
MobileClientCard('mobile_client', 'Mobile Client', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the MobileClient element
include('aws-20200430/Item/General/MobileClient')
MobileClientCard('mobile_client', 'Mobile Client', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the MobileClient element
include('aws-20200430/Item/General/MobileClient')
MobileClient('mobile_client', 'Mobile Client', 'an optional tech field')
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
' loads the MobileClient element
include('aws-20200430/Item/General/MobileClient')
MobileClient('mobile_client', 'Mobile Client', 'an optional tech field')
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
' loads the MobileClient element
include('aws-20200430/Item/General/MobileClient')
MobileClientGroup('mobile_client', 'Mobile Client', 'an optional tech field'){
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
' loads the MobileClient element
include('aws-20200430/Item/General/MobileClient')
MobileClientGroup('mobile_client', 'Mobile Client', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

