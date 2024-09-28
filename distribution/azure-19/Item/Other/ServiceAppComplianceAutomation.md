# ServiceAppComplianceAutomation


```text
azure-19/Item/Other/ServiceAppComplianceAutomation
```

```text
include('azure-19/Item/Other/ServiceAppComplianceAutomation')
```



| Illustration | ServiceAppComplianceAutomation | ServiceAppComplianceAutomationCard | ServiceAppComplianceAutomationGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-19/Item/Other/ServiceAppComplianceAutomation.png) | ![illustration for ServiceAppComplianceAutomation](../../../azure-19/Item/Other/ServiceAppComplianceAutomation.Local.png) | ![illustration for ServiceAppComplianceAutomationCard](../../../azure-19/Item/Other/ServiceAppComplianceAutomationCard.Local.png) | ![illustration for ServiceAppComplianceAutomationGroup](../../../azure-19/Item/Other/ServiceAppComplianceAutomationGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceAppComplianceAutomationXs>`
- `<$ServiceAppComplianceAutomationSm>`
- `<$ServiceAppComplianceAutomationMd>`
- `<$ServiceAppComplianceAutomationLg>`





## ServiceAppComplianceAutomation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAppComplianceAutomation
include('azure-19/Item/Other/ServiceAppComplianceAutomation')

' renders the element
ServiceAppComplianceAutomation('ServiceAppComplianceAutomation', 'Service App Compliance Automation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceAppComplianceAutomation
include('azure-19/Item/Other/ServiceAppComplianceAutomation')

' renders the element
ServiceAppComplianceAutomation('ServiceAppComplianceAutomation', 'Service App Compliance Automation', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAppComplianceAutomationCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAppComplianceAutomationCard
include('azure-19/Item/Other/ServiceAppComplianceAutomation')

' renders the element
ServiceAppComplianceAutomationCard('ServiceAppComplianceAutomationCard', 'Service App Compliance Automation Card', 'an optional description')
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

' loads the Item which embeds the element ServiceAppComplianceAutomationCard
include('azure-19/Item/Other/ServiceAppComplianceAutomation')

' renders the element
ServiceAppComplianceAutomationCard('ServiceAppComplianceAutomationCard', 'Service App Compliance Automation Card', 'an optional description')
@enduml
```

## ServiceAppComplianceAutomationGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAppComplianceAutomationGroup
include('azure-19/Item/Other/ServiceAppComplianceAutomation')

' renders the element
ServiceAppComplianceAutomationGroup('ServiceAppComplianceAutomationGroup', 'Service App Compliance Automation Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceAppComplianceAutomationGroup
include('azure-19/Item/Other/ServiceAppComplianceAutomation')

' renders the element
ServiceAppComplianceAutomationGroup('ServiceAppComplianceAutomationGroup', 'Service App Compliance Automation Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

