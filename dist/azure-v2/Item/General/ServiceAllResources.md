# Service All Resources

```text
azure-v2/Item/General/ServiceAllResources
```

```text
include('azure-v2/Item/General/ServiceAllResources')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceAllResources.png)|![](ServiceAllResources.card.png)|![](ServiceAllResources.element.png)|![](ServiceAllResources.group.png)|



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
' loads the ServiceAllResources element
include('azure-v2/Item/General/ServiceAllResources')
ServiceAllResourcesCard('service_all_resources', 'Service All Resources', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAllResources element
include('azure-v2/Item/General/ServiceAllResources')
ServiceAllResourcesCard('service_all_resources', 'Service All Resources', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAllResources element
include('azure-v2/Item/General/ServiceAllResources')
ServiceAllResources('service_all_resources', 'Service All Resources', 'an optional tech field')
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
' loads the ServiceAllResources element
include('azure-v2/Item/General/ServiceAllResources')
ServiceAllResources('service_all_resources', 'Service All Resources', 'an optional tech field')
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
' loads the ServiceAllResources element
include('azure-v2/Item/General/ServiceAllResources')
ServiceAllResourcesGroup('service_all_resources', 'Service All Resources', 'an optional tech field'){
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
' loads the ServiceAllResources element
include('azure-v2/Item/General/ServiceAllResources')
ServiceAllResourcesGroup('service_all_resources', 'Service All Resources', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

