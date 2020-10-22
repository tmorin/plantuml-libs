# Service Groups

```text
azure-v2/Item/Identity/ServiceGroups
```

```text
include('azure-v2/Item/Identity/ServiceGroups')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceGroups.png)|![](ServiceGroups.card.png)|![](ServiceGroups.element.png)|![](ServiceGroups.group.png)|



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
' loads the ServiceGroups element
include('azure-v2/Item/Identity/ServiceGroups')
ServiceGroupsCard('service_groups', 'Service Groups', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceGroups element
include('azure-v2/Item/Identity/ServiceGroups')
ServiceGroupsCard('service_groups', 'Service Groups', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceGroups element
include('azure-v2/Item/Identity/ServiceGroups')
ServiceGroups('service_groups', 'Service Groups', 'an optional tech field')
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
' loads the ServiceGroups element
include('azure-v2/Item/Identity/ServiceGroups')
ServiceGroups('service_groups', 'Service Groups', 'an optional tech field')
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
' loads the ServiceGroups element
include('azure-v2/Item/Identity/ServiceGroups')
ServiceGroupsGroup('service_groups', 'Service Groups', 'an optional tech field'){
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
' loads the ServiceGroups element
include('azure-v2/Item/Identity/ServiceGroups')
ServiceGroupsGroup('service_groups', 'Service Groups', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

