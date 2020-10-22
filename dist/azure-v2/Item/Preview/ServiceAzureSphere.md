# Service Azure Sphere

```text
azure-v2/Item/Preview/ServiceAzureSphere
```

```text
include('azure-v2/Item/Preview/ServiceAzureSphere')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceAzureSphere.png)|![](ServiceAzureSphere.card.png)|![](ServiceAzureSphere.element.png)|![](ServiceAzureSphere.group.png)|



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
' loads the ServiceAzureSphere element
include('azure-v2/Item/Preview/ServiceAzureSphere')
ServiceAzureSphereCard('service_azure_sphere', 'Service Azure Sphere', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureSphere element
include('azure-v2/Item/Preview/ServiceAzureSphere')
ServiceAzureSphereCard('service_azure_sphere', 'Service Azure Sphere', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureSphere element
include('azure-v2/Item/Preview/ServiceAzureSphere')
ServiceAzureSphere('service_azure_sphere', 'Service Azure Sphere', 'an optional tech field')
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
' loads the ServiceAzureSphere element
include('azure-v2/Item/Preview/ServiceAzureSphere')
ServiceAzureSphere('service_azure_sphere', 'Service Azure Sphere', 'an optional tech field')
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
' loads the ServiceAzureSphere element
include('azure-v2/Item/Preview/ServiceAzureSphere')
ServiceAzureSphereGroup('service_azure_sphere', 'Service Azure Sphere', 'an optional tech field'){
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
' loads the ServiceAzureSphere element
include('azure-v2/Item/Preview/ServiceAzureSphere')
ServiceAzureSphereGroup('service_azure_sphere', 'Service Azure Sphere', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

