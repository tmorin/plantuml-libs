# Service Versions

```text
azure-v2/Item/General/ServiceVersions
```

```text
include('azure-v2/Item/General/ServiceVersions')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceVersions.png)|![](ServiceVersions.card.png)|![](ServiceVersions.element.png)|![](ServiceVersions.group.png)|



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
' loads the ServiceVersions element
include('azure-v2/Item/General/ServiceVersions')
ServiceVersionsCard('service_versions', 'Service Versions', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceVersions element
include('azure-v2/Item/General/ServiceVersions')
ServiceVersionsCard('service_versions', 'Service Versions', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceVersions element
include('azure-v2/Item/General/ServiceVersions')
ServiceVersions('service_versions', 'Service Versions', 'an optional tech field')
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
' loads the ServiceVersions element
include('azure-v2/Item/General/ServiceVersions')
ServiceVersions('service_versions', 'Service Versions', 'an optional tech field')
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
' loads the ServiceVersions element
include('azure-v2/Item/General/ServiceVersions')
ServiceVersionsGroup('service_versions', 'Service Versions', 'an optional tech field'){
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
' loads the ServiceVersions element
include('azure-v2/Item/General/ServiceVersions')
ServiceVersionsGroup('service_versions', 'Service Versions', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

