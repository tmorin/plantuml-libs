# Service Remote Rendering

```text
azure-v2/Item/MixedReality/ServiceRemoteRendering
```

```text
include('azure-v2/Item/MixedReality/ServiceRemoteRendering')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceRemoteRendering.png)|![](ServiceRemoteRendering.card.png)|![](ServiceRemoteRendering.element.png)|![](ServiceRemoteRendering.group.png)|



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
' loads the ServiceRemoteRendering element
include('azure-v2/Item/MixedReality/ServiceRemoteRendering')
ServiceRemoteRenderingCard('service_remote_rendering', 'Service Remote Rendering', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceRemoteRendering element
include('azure-v2/Item/MixedReality/ServiceRemoteRendering')
ServiceRemoteRenderingCard('service_remote_rendering', 'Service Remote Rendering', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceRemoteRendering element
include('azure-v2/Item/MixedReality/ServiceRemoteRendering')
ServiceRemoteRendering('service_remote_rendering', 'Service Remote Rendering', 'an optional tech field')
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
' loads the ServiceRemoteRendering element
include('azure-v2/Item/MixedReality/ServiceRemoteRendering')
ServiceRemoteRendering('service_remote_rendering', 'Service Remote Rendering', 'an optional tech field')
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
' loads the ServiceRemoteRendering element
include('azure-v2/Item/MixedReality/ServiceRemoteRendering')
ServiceRemoteRenderingGroup('service_remote_rendering', 'Service Remote Rendering', 'an optional tech field'){
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
' loads the ServiceRemoteRendering element
include('azure-v2/Item/MixedReality/ServiceRemoteRendering')
ServiceRemoteRenderingGroup('service_remote_rendering', 'Service Remote Rendering', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

