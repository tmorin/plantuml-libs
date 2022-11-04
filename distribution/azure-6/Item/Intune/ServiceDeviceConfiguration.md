# ServiceDeviceConfiguration


```text
azure-6/Item/Intune/ServiceDeviceConfiguration
```

```text
include('azure-6/Item/Intune/ServiceDeviceConfiguration')
```



| Illustration | ServiceDeviceConfiguration | ServiceDeviceConfigurationCard | ServiceDeviceConfigurationGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-6/Item/Intune/ServiceDeviceConfiguration.png) | ![illustration for ServiceDeviceConfiguration](../../../azure-6/Item/Intune/ServiceDeviceConfiguration.Local.png) | ![illustration for ServiceDeviceConfigurationCard](../../../azure-6/Item/Intune/ServiceDeviceConfigurationCard.Local.png) | ![illustration for ServiceDeviceConfigurationGroup](../../../azure-6/Item/Intune/ServiceDeviceConfigurationGroup.Local.png) |




## ServiceDeviceConfiguration

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceDeviceConfiguration
include('azure-6/Item/Intune/ServiceDeviceConfiguration')

' renders the element
ServiceDeviceConfiguration('ServiceDeviceConfiguration', 'Service Device Configuration', 'an optional tech label', 'an optional description')
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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceDeviceConfiguration
include('azure-6/Item/Intune/ServiceDeviceConfiguration')

' renders the element
ServiceDeviceConfiguration('ServiceDeviceConfiguration', 'Service Device Configuration', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceDeviceConfigurationCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceDeviceConfigurationCard
include('azure-6/Item/Intune/ServiceDeviceConfiguration')

' renders the element
ServiceDeviceConfigurationCard('ServiceDeviceConfigurationCard', 'Service Device Configuration Card', 'an optional description')
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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceDeviceConfigurationCard
include('azure-6/Item/Intune/ServiceDeviceConfiguration')

' renders the element
ServiceDeviceConfigurationCard('ServiceDeviceConfigurationCard', 'Service Device Configuration Card', 'an optional description')
@enduml
```

## ServiceDeviceConfigurationGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceDeviceConfigurationGroup
include('azure-6/Item/Intune/ServiceDeviceConfiguration')

' renders the element
ServiceDeviceConfigurationGroup('ServiceDeviceConfigurationGroup', 'Service Device Configuration Group', 'an optional tech label') {
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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceDeviceConfigurationGroup
include('azure-6/Item/Intune/ServiceDeviceConfiguration')

' renders the element
ServiceDeviceConfigurationGroup('ServiceDeviceConfigurationGroup', 'Service Device Configuration Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

