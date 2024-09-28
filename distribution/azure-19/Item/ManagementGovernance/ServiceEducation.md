# ServiceEducation


```text
azure-19/Item/ManagementGovernance/ServiceEducation
```

```text
include('azure-19/Item/ManagementGovernance/ServiceEducation')
```



| Illustration | ServiceEducation | ServiceEducationCard | ServiceEducationGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-19/Item/ManagementGovernance/ServiceEducation.png) | ![illustration for ServiceEducation](../../../azure-19/Item/ManagementGovernance/ServiceEducation.Local.png) | ![illustration for ServiceEducationCard](../../../azure-19/Item/ManagementGovernance/ServiceEducationCard.Local.png) | ![illustration for ServiceEducationGroup](../../../azure-19/Item/ManagementGovernance/ServiceEducationGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceEducationXs>`
- `<$ServiceEducationSm>`
- `<$ServiceEducationMd>`
- `<$ServiceEducationLg>`





## ServiceEducation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceEducation
include('azure-19/Item/ManagementGovernance/ServiceEducation')

' renders the element
ServiceEducation('ServiceEducation', 'Service Education', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceEducation
include('azure-19/Item/ManagementGovernance/ServiceEducation')

' renders the element
ServiceEducation('ServiceEducation', 'Service Education', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceEducationCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceEducationCard
include('azure-19/Item/ManagementGovernance/ServiceEducation')

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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceEducationCard
include('azure-19/Item/ManagementGovernance/ServiceEducation')

' renders the element
ServiceEducationCard('ServiceEducationCard', 'Service Education Card', 'an optional description')
@enduml
```

## ServiceEducationGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceEducationGroup
include('azure-19/Item/ManagementGovernance/ServiceEducation')

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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceEducationGroup
include('azure-19/Item/ManagementGovernance/ServiceEducation')

' renders the element
ServiceEducationGroup('ServiceEducationGroup', 'Service Education Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

