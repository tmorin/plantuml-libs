# Service Image Versions

```text
azure-v2/Item/Compute/ServiceImageVersions
```

```text
include('azure-v2/Item/Compute/ServiceImageVersions')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceImageVersions.png)|![](ServiceImageVersions.card.png)|![](ServiceImageVersions.element.png)|![](ServiceImageVersions.group.png)|



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
' loads the ServiceImageVersions element
include('azure-v2/Item/Compute/ServiceImageVersions')
ServiceImageVersionsCard('service_image_versions', 'Service Image Versions', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceImageVersions element
include('azure-v2/Item/Compute/ServiceImageVersions')
ServiceImageVersionsCard('service_image_versions', 'Service Image Versions', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceImageVersions element
include('azure-v2/Item/Compute/ServiceImageVersions')
ServiceImageVersions('service_image_versions', 'Service Image Versions', 'an optional tech field')
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
' loads the ServiceImageVersions element
include('azure-v2/Item/Compute/ServiceImageVersions')
ServiceImageVersions('service_image_versions', 'Service Image Versions', 'an optional tech field')
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
' loads the ServiceImageVersions element
include('azure-v2/Item/Compute/ServiceImageVersions')
ServiceImageVersionsGroup('service_image_versions', 'Service Image Versions', 'an optional tech field'){
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
' loads the ServiceImageVersions element
include('azure-v2/Item/Compute/ServiceImageVersions')
ServiceImageVersionsGroup('service_image_versions', 'Service Image Versions', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

