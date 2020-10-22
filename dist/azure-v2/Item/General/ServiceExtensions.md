# Service Extensions

```text
azure-v2/Item/General/ServiceExtensions
```

```text
include('azure-v2/Item/General/ServiceExtensions')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceExtensions.png)|![](ServiceExtensions.card.png)|![](ServiceExtensions.element.png)|![](ServiceExtensions.group.png)|



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
' loads the ServiceExtensions element
include('azure-v2/Item/General/ServiceExtensions')
ServiceExtensionsCard('service_extensions', 'Service Extensions', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceExtensions element
include('azure-v2/Item/General/ServiceExtensions')
ServiceExtensionsCard('service_extensions', 'Service Extensions', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceExtensions element
include('azure-v2/Item/General/ServiceExtensions')
ServiceExtensions('service_extensions', 'Service Extensions', 'an optional tech field')
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
' loads the ServiceExtensions element
include('azure-v2/Item/General/ServiceExtensions')
ServiceExtensions('service_extensions', 'Service Extensions', 'an optional tech field')
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
' loads the ServiceExtensions element
include('azure-v2/Item/General/ServiceExtensions')
ServiceExtensionsGroup('service_extensions', 'Service Extensions', 'an optional tech field'){
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
' loads the ServiceExtensions element
include('azure-v2/Item/General/ServiceExtensions')
ServiceExtensionsGroup('service_extensions', 'Service Extensions', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

