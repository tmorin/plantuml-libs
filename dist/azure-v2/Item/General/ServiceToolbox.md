# Service Toolbox

```text
azure-v2/Item/General/ServiceToolbox
```

```text
include('azure-v2/Item/General/ServiceToolbox')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceToolbox.png)|![](ServiceToolbox.card.png)|![](ServiceToolbox.element.png)|![](ServiceToolbox.group.png)|



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
' loads the ServiceToolbox element
include('azure-v2/Item/General/ServiceToolbox')
ServiceToolboxCard('service_toolbox', 'Service Toolbox', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceToolbox element
include('azure-v2/Item/General/ServiceToolbox')
ServiceToolboxCard('service_toolbox', 'Service Toolbox', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceToolbox element
include('azure-v2/Item/General/ServiceToolbox')
ServiceToolbox('service_toolbox', 'Service Toolbox', 'an optional tech field')
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
' loads the ServiceToolbox element
include('azure-v2/Item/General/ServiceToolbox')
ServiceToolbox('service_toolbox', 'Service Toolbox', 'an optional tech field')
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
' loads the ServiceToolbox element
include('azure-v2/Item/General/ServiceToolbox')
ServiceToolboxGroup('service_toolbox', 'Service Toolbox', 'an optional tech field'){
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
' loads the ServiceToolbox element
include('azure-v2/Item/General/ServiceToolbox')
ServiceToolboxGroup('service_toolbox', 'Service Toolbox', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

