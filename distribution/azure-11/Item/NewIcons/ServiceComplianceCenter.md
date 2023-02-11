# ServiceComplianceCenter


```text
azure-11/Item/NewIcons/ServiceComplianceCenter
```

```text
include('azure-11/Item/NewIcons/ServiceComplianceCenter')
```



| Illustration | ServiceComplianceCenter | ServiceComplianceCenterCard | ServiceComplianceCenterGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/NewIcons/ServiceComplianceCenter.png) | ![illustration for ServiceComplianceCenter](../../../azure-11/Item/NewIcons/ServiceComplianceCenter.Local.png) | ![illustration for ServiceComplianceCenterCard](../../../azure-11/Item/NewIcons/ServiceComplianceCenterCard.Local.png) | ![illustration for ServiceComplianceCenterGroup](../../../azure-11/Item/NewIcons/ServiceComplianceCenterGroup.Local.png) |




## ServiceComplianceCenter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceComplianceCenter
include('azure-11/Item/NewIcons/ServiceComplianceCenter')

' renders the element
ServiceComplianceCenter('ServiceComplianceCenter', 'Service Compliance Center', 'an optional tech label', 'an optional description')
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceComplianceCenter
include('azure-11/Item/NewIcons/ServiceComplianceCenter')

' renders the element
ServiceComplianceCenter('ServiceComplianceCenter', 'Service Compliance Center', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceComplianceCenterCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceComplianceCenterCard
include('azure-11/Item/NewIcons/ServiceComplianceCenter')

' renders the element
ServiceComplianceCenterCard('ServiceComplianceCenterCard', 'Service Compliance Center Card', 'an optional description')
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceComplianceCenterCard
include('azure-11/Item/NewIcons/ServiceComplianceCenter')

' renders the element
ServiceComplianceCenterCard('ServiceComplianceCenterCard', 'Service Compliance Center Card', 'an optional description')
@enduml
```

## ServiceComplianceCenterGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceComplianceCenterGroup
include('azure-11/Item/NewIcons/ServiceComplianceCenter')

' renders the element
ServiceComplianceCenterGroup('ServiceComplianceCenterGroup', 'Service Compliance Center Group', 'an optional tech label') {
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceComplianceCenterGroup
include('azure-11/Item/NewIcons/ServiceComplianceCenter')

' renders the element
ServiceComplianceCenterGroup('ServiceComplianceCenterGroup', 'Service Compliance Center Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

