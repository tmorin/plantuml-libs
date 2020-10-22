# Service Resource Groups

```text
azure-v2/Item/General/ServiceResourceGroups
```

```text
include('azure-v2/Item/General/ServiceResourceGroups')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceResourceGroups.png)|![](ServiceResourceGroups.card.png)|![](ServiceResourceGroups.element.png)|![](ServiceResourceGroups.group.png)|



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
' loads the ServiceResourceGroups element
include('azure-v2/Item/General/ServiceResourceGroups')
ServiceResourceGroupsCard('service_resource_groups', 'Service Resource Groups', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceResourceGroups element
include('azure-v2/Item/General/ServiceResourceGroups')
ServiceResourceGroupsCard('service_resource_groups', 'Service Resource Groups', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceResourceGroups element
include('azure-v2/Item/General/ServiceResourceGroups')
ServiceResourceGroups('service_resource_groups', 'Service Resource Groups', 'an optional tech field')
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
' loads the ServiceResourceGroups element
include('azure-v2/Item/General/ServiceResourceGroups')
ServiceResourceGroups('service_resource_groups', 'Service Resource Groups', 'an optional tech field')
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
' loads the ServiceResourceGroups element
include('azure-v2/Item/General/ServiceResourceGroups')
ServiceResourceGroupsGroup('service_resource_groups', 'Service Resource Groups', 'an optional tech field'){
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
' loads the ServiceResourceGroups element
include('azure-v2/Item/General/ServiceResourceGroups')
ServiceResourceGroupsGroup('service_resource_groups', 'Service Resource Groups', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

