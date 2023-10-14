# ServiceDeviceCompliance


```text
azure-17/Item/Intune/ServiceDeviceCompliance
```

```text
include('azure-17/Item/Intune/ServiceDeviceCompliance')
```



| Illustration | ServiceDeviceCompliance | ServiceDeviceComplianceCard | ServiceDeviceComplianceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-17/Item/Intune/ServiceDeviceCompliance.png) | ![illustration for ServiceDeviceCompliance](../../../azure-17/Item/Intune/ServiceDeviceCompliance.Local.png) | ![illustration for ServiceDeviceComplianceCard](../../../azure-17/Item/Intune/ServiceDeviceComplianceCard.Local.png) | ![illustration for ServiceDeviceComplianceGroup](../../../azure-17/Item/Intune/ServiceDeviceComplianceGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceDeviceComplianceXs>`
- `<$ServiceDeviceComplianceSm>`
- `<$ServiceDeviceComplianceMd>`
- `<$ServiceDeviceComplianceLg>`





## ServiceDeviceCompliance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceDeviceCompliance
include('azure-17/Item/Intune/ServiceDeviceCompliance')

' renders the element
ServiceDeviceCompliance('ServiceDeviceCompliance', 'Service Device Compliance', 'an optional tech label', 'an optional description')
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceDeviceCompliance
include('azure-17/Item/Intune/ServiceDeviceCompliance')

' renders the element
ServiceDeviceCompliance('ServiceDeviceCompliance', 'Service Device Compliance', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceDeviceComplianceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceDeviceComplianceCard
include('azure-17/Item/Intune/ServiceDeviceCompliance')

' renders the element
ServiceDeviceComplianceCard('ServiceDeviceComplianceCard', 'Service Device Compliance Card', 'an optional description')
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceDeviceComplianceCard
include('azure-17/Item/Intune/ServiceDeviceCompliance')

' renders the element
ServiceDeviceComplianceCard('ServiceDeviceComplianceCard', 'Service Device Compliance Card', 'an optional description')
@enduml
```

## ServiceDeviceComplianceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceDeviceComplianceGroup
include('azure-17/Item/Intune/ServiceDeviceCompliance')

' renders the element
ServiceDeviceComplianceGroup('ServiceDeviceComplianceGroup', 'Service Device Compliance Group', 'an optional tech label') {
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceDeviceComplianceGroup
include('azure-17/Item/Intune/ServiceDeviceCompliance')

' renders the element
ServiceDeviceComplianceGroup('ServiceDeviceComplianceGroup', 'Service Device Compliance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

