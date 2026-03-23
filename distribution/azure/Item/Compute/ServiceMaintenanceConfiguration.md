# ServiceMaintenanceConfiguration


```text
azure/Item/Compute/ServiceMaintenanceConfiguration
```

```text
include('azure/Item/Compute/ServiceMaintenanceConfiguration')
```



| Illustration | ServiceMaintenanceConfiguration | ServiceMaintenanceConfigurationCard | ServiceMaintenanceConfigurationGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Compute/ServiceMaintenanceConfiguration.png) | ![illustration for ServiceMaintenanceConfiguration](../../../azure/Item/Compute/ServiceMaintenanceConfiguration.Local.png) | ![illustration for ServiceMaintenanceConfigurationCard](../../../azure/Item/Compute/ServiceMaintenanceConfigurationCard.Local.png) | ![illustration for ServiceMaintenanceConfigurationGroup](../../../azure/Item/Compute/ServiceMaintenanceConfigurationGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceMaintenanceConfigurationXs>`
- `<$ServiceMaintenanceConfigurationSm>`
- `<$ServiceMaintenanceConfigurationMd>`
- `<$ServiceMaintenanceConfigurationLg>`





## ServiceMaintenanceConfiguration

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceMaintenanceConfiguration
include('azure/Item/Compute/ServiceMaintenanceConfiguration')

' renders the element
ServiceMaintenanceConfiguration('ServiceMaintenanceConfiguration', 'Service Maintenance Configuration', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceMaintenanceConfiguration
include('azure/Item/Compute/ServiceMaintenanceConfiguration')

' renders the element
ServiceMaintenanceConfiguration('ServiceMaintenanceConfiguration', 'Service Maintenance Configuration', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceMaintenanceConfigurationCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceMaintenanceConfigurationCard
include('azure/Item/Compute/ServiceMaintenanceConfiguration')

' renders the element
ServiceMaintenanceConfigurationCard('ServiceMaintenanceConfigurationCard', 'Service Maintenance Configuration Card', 'an optional description')
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

' loads the Item which embeds the element ServiceMaintenanceConfigurationCard
include('azure/Item/Compute/ServiceMaintenanceConfiguration')

' renders the element
ServiceMaintenanceConfigurationCard('ServiceMaintenanceConfigurationCard', 'Service Maintenance Configuration Card', 'an optional description')
@enduml
```

## ServiceMaintenanceConfigurationGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceMaintenanceConfigurationGroup
include('azure/Item/Compute/ServiceMaintenanceConfiguration')

' renders the element
ServiceMaintenanceConfigurationGroup('ServiceMaintenanceConfigurationGroup', 'Service Maintenance Configuration Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceMaintenanceConfigurationGroup
include('azure/Item/Compute/ServiceMaintenanceConfiguration')

' renders the element
ServiceMaintenanceConfigurationGroup('ServiceMaintenanceConfigurationGroup', 'Service Maintenance Configuration Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

