# ServiceDeviceProvisioningServices


```text
azure-4/Item/IoT/ServiceDeviceProvisioningServices
```

```text
include('azure-4/Item/IoT/ServiceDeviceProvisioningServices')
```



| Illustration | ServiceDeviceProvisioningServices | ServiceDeviceProvisioningServicesCard | ServiceDeviceProvisioningServicesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/IoT/ServiceDeviceProvisioningServices.png) | ![illustration for ServiceDeviceProvisioningServices](../../../azure-4/Item/IoT/ServiceDeviceProvisioningServices.Local.png) | ![illustration for ServiceDeviceProvisioningServicesCard](../../../azure-4/Item/IoT/ServiceDeviceProvisioningServicesCard.Local.png) | ![illustration for ServiceDeviceProvisioningServicesGroup](../../../azure-4/Item/IoT/ServiceDeviceProvisioningServicesGroup.Local.png) |




## ServiceDeviceProvisioningServices

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceDeviceProvisioningServices
include('azure-4/Item/IoT/ServiceDeviceProvisioningServices')

' renders the element
ServiceDeviceProvisioningServices('ServiceDeviceProvisioningServices', 'Service Device Provisioning Services', 'an optional tech label')
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

' loads the Item which embeds the element ServiceDeviceProvisioningServices
include('azure-4/Item/IoT/ServiceDeviceProvisioningServices')

' renders the element
ServiceDeviceProvisioningServices('ServiceDeviceProvisioningServices', 'Service Device Provisioning Services', 'an optional tech label')
@enduml
```

## ServiceDeviceProvisioningServicesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceDeviceProvisioningServicesCard
include('azure-4/Item/IoT/ServiceDeviceProvisioningServices')

' renders the element
ServiceDeviceProvisioningServicesCard('ServiceDeviceProvisioningServicesCard', 'Service Device Provisioning Services Card', 'an optional description')
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

' loads the Item which embeds the element ServiceDeviceProvisioningServicesCard
include('azure-4/Item/IoT/ServiceDeviceProvisioningServices')

' renders the element
ServiceDeviceProvisioningServicesCard('ServiceDeviceProvisioningServicesCard', 'Service Device Provisioning Services Card', 'an optional description')
@enduml
```

## ServiceDeviceProvisioningServicesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceDeviceProvisioningServicesGroup
include('azure-4/Item/IoT/ServiceDeviceProvisioningServices')

' renders the element
ServiceDeviceProvisioningServicesGroup('ServiceDeviceProvisioningServicesGroup', 'Service Device Provisioning Services Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceDeviceProvisioningServicesGroup
include('azure-4/Item/IoT/ServiceDeviceProvisioningServices')

' renders the element
ServiceDeviceProvisioningServicesGroup('ServiceDeviceProvisioningServicesGroup', 'Service Device Provisioning Services Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

