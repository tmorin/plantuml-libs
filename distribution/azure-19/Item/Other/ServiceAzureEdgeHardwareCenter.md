# ServiceAzureEdgeHardwareCenter


```text
azure-19/Item/Other/ServiceAzureEdgeHardwareCenter
```

```text
include('azure-19/Item/Other/ServiceAzureEdgeHardwareCenter')
```



| Illustration | ServiceAzureEdgeHardwareCenter | ServiceAzureEdgeHardwareCenterCard | ServiceAzureEdgeHardwareCenterGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-19/Item/Other/ServiceAzureEdgeHardwareCenter.png) | ![illustration for ServiceAzureEdgeHardwareCenter](../../../azure-19/Item/Other/ServiceAzureEdgeHardwareCenter.Local.png) | ![illustration for ServiceAzureEdgeHardwareCenterCard](../../../azure-19/Item/Other/ServiceAzureEdgeHardwareCenterCard.Local.png) | ![illustration for ServiceAzureEdgeHardwareCenterGroup](../../../azure-19/Item/Other/ServiceAzureEdgeHardwareCenterGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceAzureEdgeHardwareCenterXs>`
- `<$ServiceAzureEdgeHardwareCenterSm>`
- `<$ServiceAzureEdgeHardwareCenterMd>`
- `<$ServiceAzureEdgeHardwareCenterLg>`





## ServiceAzureEdgeHardwareCenter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAzureEdgeHardwareCenter
include('azure-19/Item/Other/ServiceAzureEdgeHardwareCenter')

' renders the element
ServiceAzureEdgeHardwareCenter('ServiceAzureEdgeHardwareCenter', 'Service Azure Edge Hardware Center', 'an optional tech label', 'an optional description')
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAzureEdgeHardwareCenter
include('azure-19/Item/Other/ServiceAzureEdgeHardwareCenter')

' renders the element
ServiceAzureEdgeHardwareCenter('ServiceAzureEdgeHardwareCenter', 'Service Azure Edge Hardware Center', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAzureEdgeHardwareCenterCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAzureEdgeHardwareCenterCard
include('azure-19/Item/Other/ServiceAzureEdgeHardwareCenter')

' renders the element
ServiceAzureEdgeHardwareCenterCard('ServiceAzureEdgeHardwareCenterCard', 'Service Azure Edge Hardware Center Card', 'an optional description')
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAzureEdgeHardwareCenterCard
include('azure-19/Item/Other/ServiceAzureEdgeHardwareCenter')

' renders the element
ServiceAzureEdgeHardwareCenterCard('ServiceAzureEdgeHardwareCenterCard', 'Service Azure Edge Hardware Center Card', 'an optional description')
@enduml
```

## ServiceAzureEdgeHardwareCenterGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAzureEdgeHardwareCenterGroup
include('azure-19/Item/Other/ServiceAzureEdgeHardwareCenter')

' renders the element
ServiceAzureEdgeHardwareCenterGroup('ServiceAzureEdgeHardwareCenterGroup', 'Service Azure Edge Hardware Center Group', 'an optional tech label') {
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAzureEdgeHardwareCenterGroup
include('azure-19/Item/Other/ServiceAzureEdgeHardwareCenter')

' renders the element
ServiceAzureEdgeHardwareCenterGroup('ServiceAzureEdgeHardwareCenterGroup', 'Service Azure Edge Hardware Center Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

