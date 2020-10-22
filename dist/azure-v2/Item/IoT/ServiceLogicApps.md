# Service Logic Apps

```text
azure-v2/Item/IoT/ServiceLogicApps
```

```text
include('azure-v2/Item/IoT/ServiceLogicApps')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceLogicApps.png)|![](ServiceLogicApps.card.png)|![](ServiceLogicApps.element.png)|![](ServiceLogicApps.group.png)|



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
' loads the ServiceLogicApps element
include('azure-v2/Item/IoT/ServiceLogicApps')
ServiceLogicAppsCard('service_logic_apps', 'Service Logic Apps', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceLogicApps element
include('azure-v2/Item/IoT/ServiceLogicApps')
ServiceLogicAppsCard('service_logic_apps', 'Service Logic Apps', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceLogicApps element
include('azure-v2/Item/IoT/ServiceLogicApps')
ServiceLogicApps('service_logic_apps', 'Service Logic Apps', 'an optional tech field')
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
' loads the ServiceLogicApps element
include('azure-v2/Item/IoT/ServiceLogicApps')
ServiceLogicApps('service_logic_apps', 'Service Logic Apps', 'an optional tech field')
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
' loads the ServiceLogicApps element
include('azure-v2/Item/IoT/ServiceLogicApps')
ServiceLogicAppsGroup('service_logic_apps', 'Service Logic Apps', 'an optional tech field'){
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
' loads the ServiceLogicApps element
include('azure-v2/Item/IoT/ServiceLogicApps')
ServiceLogicAppsGroup('service_logic_apps', 'Service Logic Apps', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

