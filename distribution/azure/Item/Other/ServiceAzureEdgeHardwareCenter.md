# ServiceAzureEdgeHardwareCenter


```text
azure/Item/Other/ServiceAzureEdgeHardwareCenter
```

```text
include('azure/Item/Other/ServiceAzureEdgeHardwareCenter')
```



| Illustration | ServiceAzureEdgeHardwareCenter | ServiceAzureEdgeHardwareCenterCard | ServiceAzureEdgeHardwareCenterGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Other/ServiceAzureEdgeHardwareCenter.png) | ![illustration for ServiceAzureEdgeHardwareCenter](../../../azure/Item/Other/ServiceAzureEdgeHardwareCenter.Local.png) | ![illustration for ServiceAzureEdgeHardwareCenterCard](../../../azure/Item/Other/ServiceAzureEdgeHardwareCenterCard.Local.png) | ![illustration for ServiceAzureEdgeHardwareCenterGroup](../../../azure/Item/Other/ServiceAzureEdgeHardwareCenterGroup.Local.png) |



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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAzureEdgeHardwareCenter
include('azure/Item/Other/ServiceAzureEdgeHardwareCenter')

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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAzureEdgeHardwareCenter
include('azure/Item/Other/ServiceAzureEdgeHardwareCenter')

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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAzureEdgeHardwareCenterCard
include('azure/Item/Other/ServiceAzureEdgeHardwareCenter')

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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAzureEdgeHardwareCenterCard
include('azure/Item/Other/ServiceAzureEdgeHardwareCenter')

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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAzureEdgeHardwareCenterGroup
include('azure/Item/Other/ServiceAzureEdgeHardwareCenter')

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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAzureEdgeHardwareCenterGroup
include('azure/Item/Other/ServiceAzureEdgeHardwareCenter')

' renders the element
ServiceAzureEdgeHardwareCenterGroup('ServiceAzureEdgeHardwareCenterGroup', 'Service Azure Edge Hardware Center Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

