# ServiceRemoteRendering


```text
azure-4/Item/MixedReality/ServiceRemoteRendering
```

```text
include('azure-4/Item/MixedReality/ServiceRemoteRendering')
```



| Illustration | ServiceRemoteRendering | ServiceRemoteRenderingCard | ServiceRemoteRenderingGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/MixedReality/ServiceRemoteRendering.png) | ![illustration for ServiceRemoteRendering](../../../azure-4/Item/MixedReality/ServiceRemoteRendering.Local.png) | ![illustration for ServiceRemoteRenderingCard](../../../azure-4/Item/MixedReality/ServiceRemoteRenderingCard.Local.png) | ![illustration for ServiceRemoteRenderingGroup](../../../azure-4/Item/MixedReality/ServiceRemoteRenderingGroup.Local.png) |




## ServiceRemoteRendering

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceRemoteRendering
include('azure-4/Item/MixedReality/ServiceRemoteRendering')

' renders the element
ServiceRemoteRendering('ServiceRemoteRendering', 'Service Remote Rendering', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceRemoteRendering
include('azure-4/Item/MixedReality/ServiceRemoteRendering')

' renders the element
ServiceRemoteRendering('ServiceRemoteRendering', 'Service Remote Rendering', 'an optional tech label')
@enduml
```

## ServiceRemoteRenderingCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceRemoteRenderingCard
include('azure-4/Item/MixedReality/ServiceRemoteRendering')

' renders the element
ServiceRemoteRenderingCard('ServiceRemoteRenderingCard', 'Service Remote Rendering Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceRemoteRenderingCard
include('azure-4/Item/MixedReality/ServiceRemoteRendering')

' renders the element
ServiceRemoteRenderingCard('ServiceRemoteRenderingCard', 'Service Remote Rendering Card', 'an optional description')
@enduml
```

## ServiceRemoteRenderingGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceRemoteRenderingGroup
include('azure-4/Item/MixedReality/ServiceRemoteRendering')

' renders the element
ServiceRemoteRenderingGroup('ServiceRemoteRenderingGroup', 'Service Remote Rendering Group', 'an optional tech label') {
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

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceRemoteRenderingGroup
include('azure-4/Item/MixedReality/ServiceRemoteRendering')

' renders the element
ServiceRemoteRenderingGroup('ServiceRemoteRenderingGroup', 'Service Remote Rendering Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

