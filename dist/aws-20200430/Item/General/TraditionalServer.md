# Traditional Server

```text
aws-20200430/Item/General/TraditionalServer
```

```text
include('aws-20200430/Item/General/TraditionalServer')
```

|icon|card|element|group|
|---|---|---|---|
|![](TraditionalServer.png)|![](TraditionalServer.card.png)|![](TraditionalServer.element.png)|![](TraditionalServer.group.png)|



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
' loads the TraditionalServer element
include('aws-20200430/Item/General/TraditionalServer')
TraditionalServerCard('traditional_server', 'Traditional Server', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the TraditionalServer element
include('aws-20200430/Item/General/TraditionalServer')
TraditionalServerCard('traditional_server', 'Traditional Server', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the TraditionalServer element
include('aws-20200430/Item/General/TraditionalServer')
TraditionalServer('traditional_server', 'Traditional Server', 'an optional tech field')
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
' loads the TraditionalServer element
include('aws-20200430/Item/General/TraditionalServer')
TraditionalServer('traditional_server', 'Traditional Server', 'an optional tech field')
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
' loads the TraditionalServer element
include('aws-20200430/Item/General/TraditionalServer')
TraditionalServerGroup('traditional_server', 'Traditional Server', 'an optional tech field'){
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
' loads the TraditionalServer element
include('aws-20200430/Item/General/TraditionalServer')
TraditionalServerGroup('traditional_server', 'Traditional Server', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

