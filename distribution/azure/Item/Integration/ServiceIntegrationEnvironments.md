# ServiceIntegrationEnvironments


```text
azure/Item/Integration/ServiceIntegrationEnvironments
```

```text
include('azure/Item/Integration/ServiceIntegrationEnvironments')
```



| Illustration | ServiceIntegrationEnvironments | ServiceIntegrationEnvironmentsCard | ServiceIntegrationEnvironmentsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Integration/ServiceIntegrationEnvironments.png) | ![illustration for ServiceIntegrationEnvironments](../../../azure/Item/Integration/ServiceIntegrationEnvironments.Local.png) | ![illustration for ServiceIntegrationEnvironmentsCard](../../../azure/Item/Integration/ServiceIntegrationEnvironmentsCard.Local.png) | ![illustration for ServiceIntegrationEnvironmentsGroup](../../../azure/Item/Integration/ServiceIntegrationEnvironmentsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceIntegrationEnvironmentsXs>`
- `<$ServiceIntegrationEnvironmentsSm>`
- `<$ServiceIntegrationEnvironmentsMd>`
- `<$ServiceIntegrationEnvironmentsLg>`





## ServiceIntegrationEnvironments

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceIntegrationEnvironments
include('azure/Item/Integration/ServiceIntegrationEnvironments')

' renders the element
ServiceIntegrationEnvironments('ServiceIntegrationEnvironments', 'Service Integration Environments', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceIntegrationEnvironments
include('azure/Item/Integration/ServiceIntegrationEnvironments')

' renders the element
ServiceIntegrationEnvironments('ServiceIntegrationEnvironments', 'Service Integration Environments', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceIntegrationEnvironmentsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceIntegrationEnvironmentsCard
include('azure/Item/Integration/ServiceIntegrationEnvironments')

' renders the element
ServiceIntegrationEnvironmentsCard('ServiceIntegrationEnvironmentsCard', 'Service Integration Environments Card', 'an optional description')
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

' loads the Item which embeds the element ServiceIntegrationEnvironmentsCard
include('azure/Item/Integration/ServiceIntegrationEnvironments')

' renders the element
ServiceIntegrationEnvironmentsCard('ServiceIntegrationEnvironmentsCard', 'Service Integration Environments Card', 'an optional description')
@enduml
```

## ServiceIntegrationEnvironmentsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceIntegrationEnvironmentsGroup
include('azure/Item/Integration/ServiceIntegrationEnvironments')

' renders the element
ServiceIntegrationEnvironmentsGroup('ServiceIntegrationEnvironmentsGroup', 'Service Integration Environments Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceIntegrationEnvironmentsGroup
include('azure/Item/Integration/ServiceIntegrationEnvironments')

' renders the element
ServiceIntegrationEnvironmentsGroup('ServiceIntegrationEnvironmentsGroup', 'Service Integration Environments Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

