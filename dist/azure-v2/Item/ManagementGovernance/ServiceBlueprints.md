# Service Blueprints

```text
azure-v2/Item/ManagementGovernance/ServiceBlueprints
```

```text
include('azure-v2/Item/ManagementGovernance/ServiceBlueprints')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceBlueprints.png)|![](ServiceBlueprints.card.png)|![](ServiceBlueprints.element.png)|![](ServiceBlueprints.group.png)|



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
' loads the ServiceBlueprints element
include('azure-v2/Item/ManagementGovernance/ServiceBlueprints')
ServiceBlueprintsCard('service_blueprints', 'Service Blueprints', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceBlueprints element
include('azure-v2/Item/ManagementGovernance/ServiceBlueprints')
ServiceBlueprintsCard('service_blueprints', 'Service Blueprints', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceBlueprints element
include('azure-v2/Item/ManagementGovernance/ServiceBlueprints')
ServiceBlueprints('service_blueprints', 'Service Blueprints', 'an optional tech field')
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
' loads the ServiceBlueprints element
include('azure-v2/Item/ManagementGovernance/ServiceBlueprints')
ServiceBlueprints('service_blueprints', 'Service Blueprints', 'an optional tech field')
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
' loads the ServiceBlueprints element
include('azure-v2/Item/ManagementGovernance/ServiceBlueprints')
ServiceBlueprintsGroup('service_blueprints', 'Service Blueprints', 'an optional tech field'){
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
' loads the ServiceBlueprints element
include('azure-v2/Item/ManagementGovernance/ServiceBlueprints')
ServiceBlueprintsGroup('service_blueprints', 'Service Blueprints', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

