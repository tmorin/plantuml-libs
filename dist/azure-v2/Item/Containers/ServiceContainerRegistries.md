# Service Container Registries

```text
azure-v2/Item/Containers/ServiceContainerRegistries
```

```text
include('azure-v2/Item/Containers/ServiceContainerRegistries')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceContainerRegistries.png)|![](ServiceContainerRegistries.card.png)|![](ServiceContainerRegistries.element.png)|![](ServiceContainerRegistries.group.png)|



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
' loads the ServiceContainerRegistries element
include('azure-v2/Item/Containers/ServiceContainerRegistries')
ServiceContainerRegistriesCard('service_container_registries', 'Service Container Registries', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceContainerRegistries element
include('azure-v2/Item/Containers/ServiceContainerRegistries')
ServiceContainerRegistriesCard('service_container_registries', 'Service Container Registries', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceContainerRegistries element
include('azure-v2/Item/Containers/ServiceContainerRegistries')
ServiceContainerRegistries('service_container_registries', 'Service Container Registries', 'an optional tech field')
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
' loads the ServiceContainerRegistries element
include('azure-v2/Item/Containers/ServiceContainerRegistries')
ServiceContainerRegistries('service_container_registries', 'Service Container Registries', 'an optional tech field')
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
' loads the ServiceContainerRegistries element
include('azure-v2/Item/Containers/ServiceContainerRegistries')
ServiceContainerRegistriesGroup('service_container_registries', 'Service Container Registries', 'an optional tech field'){
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
' loads the ServiceContainerRegistries element
include('azure-v2/Item/Containers/ServiceContainerRegistries')
ServiceContainerRegistriesGroup('service_container_registries', 'Service Container Registries', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

