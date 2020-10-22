# Service Resource Group List

```text
azure-v2/Item/General/ServiceResourceGroupList
```

```text
include('azure-v2/Item/General/ServiceResourceGroupList')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceResourceGroupList.png)|![](ServiceResourceGroupList.card.png)|![](ServiceResourceGroupList.element.png)|![](ServiceResourceGroupList.group.png)|



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
' loads the ServiceResourceGroupList element
include('azure-v2/Item/General/ServiceResourceGroupList')
ServiceResourceGroupListCard('service_resource_group_list', 'Service Resource Group List', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceResourceGroupList element
include('azure-v2/Item/General/ServiceResourceGroupList')
ServiceResourceGroupListCard('service_resource_group_list', 'Service Resource Group List', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceResourceGroupList element
include('azure-v2/Item/General/ServiceResourceGroupList')
ServiceResourceGroupList('service_resource_group_list', 'Service Resource Group List', 'an optional tech field')
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
' loads the ServiceResourceGroupList element
include('azure-v2/Item/General/ServiceResourceGroupList')
ServiceResourceGroupList('service_resource_group_list', 'Service Resource Group List', 'an optional tech field')
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
' loads the ServiceResourceGroupList element
include('azure-v2/Item/General/ServiceResourceGroupList')
ServiceResourceGroupListGroup('service_resource_group_list', 'Service Resource Group List', 'an optional tech field'){
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
' loads the ServiceResourceGroupList element
include('azure-v2/Item/General/ServiceResourceGroupList')
ServiceResourceGroupListGroup('service_resource_group_list', 'Service Resource Group List', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

