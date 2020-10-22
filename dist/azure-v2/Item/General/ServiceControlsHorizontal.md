# Service Controls Horizontal

```text
azure-v2/Item/General/ServiceControlsHorizontal
```

```text
include('azure-v2/Item/General/ServiceControlsHorizontal')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceControlsHorizontal.png)|![](ServiceControlsHorizontal.card.png)|![](ServiceControlsHorizontal.element.png)|![](ServiceControlsHorizontal.group.png)|



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
' loads the ServiceControlsHorizontal element
include('azure-v2/Item/General/ServiceControlsHorizontal')
ServiceControlsHorizontalCard('service_controls_horizontal', 'Service Controls Horizontal', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceControlsHorizontal element
include('azure-v2/Item/General/ServiceControlsHorizontal')
ServiceControlsHorizontalCard('service_controls_horizontal', 'Service Controls Horizontal', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceControlsHorizontal element
include('azure-v2/Item/General/ServiceControlsHorizontal')
ServiceControlsHorizontal('service_controls_horizontal', 'Service Controls Horizontal', 'an optional tech field')
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
' loads the ServiceControlsHorizontal element
include('azure-v2/Item/General/ServiceControlsHorizontal')
ServiceControlsHorizontal('service_controls_horizontal', 'Service Controls Horizontal', 'an optional tech field')
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
' loads the ServiceControlsHorizontal element
include('azure-v2/Item/General/ServiceControlsHorizontal')
ServiceControlsHorizontalGroup('service_controls_horizontal', 'Service Controls Horizontal', 'an optional tech field'){
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
' loads the ServiceControlsHorizontal element
include('azure-v2/Item/General/ServiceControlsHorizontal')
ServiceControlsHorizontalGroup('service_controls_horizontal', 'Service Controls Horizontal', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

