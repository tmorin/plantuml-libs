# ServiceEducation


```text
azure-4/Item/ManagementGovernance/ServiceEducation
```

```text
include('azure-4/Item/ManagementGovernance/ServiceEducation')
```



| Illustration | ServiceEducation | ServiceEducationCard | ServiceEducationGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/ManagementGovernance/ServiceEducation.png) | ![illustration for ServiceEducation](../../../azure-4/Item/ManagementGovernance/ServiceEducation.Local.png) | ![illustration for ServiceEducationCard](../../../azure-4/Item/ManagementGovernance/ServiceEducationCard.Local.png) | ![illustration for ServiceEducationGroup](../../../azure-4/Item/ManagementGovernance/ServiceEducationGroup.Local.png) |




## ServiceEducation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceEducation
include('azure-4/Item/ManagementGovernance/ServiceEducation')

' renders the element
ServiceEducation('ServiceEducation', 'Service Education', 'an optional tech label')
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

' loads the Item which embeds the element ServiceEducation
include('azure-4/Item/ManagementGovernance/ServiceEducation')

' renders the element
ServiceEducation('ServiceEducation', 'Service Education', 'an optional tech label')
@enduml
```

## ServiceEducationCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceEducationCard
include('azure-4/Item/ManagementGovernance/ServiceEducation')

' renders the element
ServiceEducationCard('ServiceEducationCard', 'Service Education Card', 'an optional description')
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

' loads the Item which embeds the element ServiceEducationCard
include('azure-4/Item/ManagementGovernance/ServiceEducation')

' renders the element
ServiceEducationCard('ServiceEducationCard', 'Service Education Card', 'an optional description')
@enduml
```

## ServiceEducationGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceEducationGroup
include('azure-4/Item/ManagementGovernance/ServiceEducation')

' renders the element
ServiceEducationGroup('ServiceEducationGroup', 'Service Education Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceEducationGroup
include('azure-4/Item/ManagementGovernance/ServiceEducation')

' renders the element
ServiceEducationGroup('ServiceEducationGroup', 'Service Education Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

