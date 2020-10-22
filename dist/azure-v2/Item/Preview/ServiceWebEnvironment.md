# Service Web Environment

```text
azure-v2/Item/Preview/ServiceWebEnvironment
```

```text
include('azure-v2/Item/Preview/ServiceWebEnvironment')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceWebEnvironment.png)|![](ServiceWebEnvironment.card.png)|![](ServiceWebEnvironment.element.png)|![](ServiceWebEnvironment.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceWebEnvironment element
include('azure-v2/Item/Preview/ServiceWebEnvironment')
ServiceWebEnvironmentCard('service_web_environment', 'Service Web Environment', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceWebEnvironment element
include('azure-v2/Item/Preview/ServiceWebEnvironment')
ServiceWebEnvironmentCard('service_web_environment', 'Service Web Environment', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceWebEnvironment element
include('azure-v2/Item/Preview/ServiceWebEnvironment')
ServiceWebEnvironment('service_web_environment', 'Service Web Environment', 'an optional tech field')
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
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceWebEnvironment element
include('azure-v2/Item/Preview/ServiceWebEnvironment')
ServiceWebEnvironment('service_web_environment', 'Service Web Environment', 'an optional tech field')
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
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceWebEnvironment element
include('azure-v2/Item/Preview/ServiceWebEnvironment')
ServiceWebEnvironmentGroup('service_web_environment', 'Service Web Environment', 'an optional tech field'){
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
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceWebEnvironment element
include('azure-v2/Item/Preview/ServiceWebEnvironment')
ServiceWebEnvironmentGroup('service_web_environment', 'Service Web Environment', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

