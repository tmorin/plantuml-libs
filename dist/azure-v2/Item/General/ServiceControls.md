# Service Controls

```text
azure-v2/Item/General/ServiceControls
```

```text
include('azure-v2/Item/General/ServiceControls')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceControls.png)|![](ServiceControls.card.png)|![](ServiceControls.element.png)|![](ServiceControls.group.png)|



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
' loads the ServiceControls element
include('azure-v2/Item/General/ServiceControls')
ServiceControlsCard('service_controls', 'Service Controls', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceControls element
include('azure-v2/Item/General/ServiceControls')
ServiceControlsCard('service_controls', 'Service Controls', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceControls element
include('azure-v2/Item/General/ServiceControls')
ServiceControls('service_controls', 'Service Controls', 'an optional tech field')
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
' loads the ServiceControls element
include('azure-v2/Item/General/ServiceControls')
ServiceControls('service_controls', 'Service Controls', 'an optional tech field')
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
' loads the ServiceControls element
include('azure-v2/Item/General/ServiceControls')
ServiceControlsGroup('service_controls', 'Service Controls', 'an optional tech field'){
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
' loads the ServiceControls element
include('azure-v2/Item/General/ServiceControls')
ServiceControlsGroup('service_controls', 'Service Controls', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

