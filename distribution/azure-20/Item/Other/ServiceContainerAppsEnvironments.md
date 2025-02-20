# ServiceContainerAppsEnvironments


```text
azure-20/Item/Other/ServiceContainerAppsEnvironments
```

```text
include('azure-20/Item/Other/ServiceContainerAppsEnvironments')
```



| Illustration | ServiceContainerAppsEnvironments | ServiceContainerAppsEnvironmentsCard | ServiceContainerAppsEnvironmentsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/Other/ServiceContainerAppsEnvironments.png) | ![illustration for ServiceContainerAppsEnvironments](../../../azure-20/Item/Other/ServiceContainerAppsEnvironments.Local.png) | ![illustration for ServiceContainerAppsEnvironmentsCard](../../../azure-20/Item/Other/ServiceContainerAppsEnvironmentsCard.Local.png) | ![illustration for ServiceContainerAppsEnvironmentsGroup](../../../azure-20/Item/Other/ServiceContainerAppsEnvironmentsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceContainerAppsEnvironmentsXs>`
- `<$ServiceContainerAppsEnvironmentsSm>`
- `<$ServiceContainerAppsEnvironmentsMd>`
- `<$ServiceContainerAppsEnvironmentsLg>`





## ServiceContainerAppsEnvironments

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceContainerAppsEnvironments
include('azure-20/Item/Other/ServiceContainerAppsEnvironments')

' renders the element
ServiceContainerAppsEnvironments('ServiceContainerAppsEnvironments', 'Service Container Apps Environments', 'an optional tech label', 'an optional description')
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceContainerAppsEnvironments
include('azure-20/Item/Other/ServiceContainerAppsEnvironments')

' renders the element
ServiceContainerAppsEnvironments('ServiceContainerAppsEnvironments', 'Service Container Apps Environments', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceContainerAppsEnvironmentsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceContainerAppsEnvironmentsCard
include('azure-20/Item/Other/ServiceContainerAppsEnvironments')

' renders the element
ServiceContainerAppsEnvironmentsCard('ServiceContainerAppsEnvironmentsCard', 'Service Container Apps Environments Card', 'an optional description')
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceContainerAppsEnvironmentsCard
include('azure-20/Item/Other/ServiceContainerAppsEnvironments')

' renders the element
ServiceContainerAppsEnvironmentsCard('ServiceContainerAppsEnvironmentsCard', 'Service Container Apps Environments Card', 'an optional description')
@enduml
```

## ServiceContainerAppsEnvironmentsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceContainerAppsEnvironmentsGroup
include('azure-20/Item/Other/ServiceContainerAppsEnvironments')

' renders the element
ServiceContainerAppsEnvironmentsGroup('ServiceContainerAppsEnvironmentsGroup', 'Service Container Apps Environments Group', 'an optional tech label') {
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceContainerAppsEnvironmentsGroup
include('azure-20/Item/Other/ServiceContainerAppsEnvironments')

' renders the element
ServiceContainerAppsEnvironmentsGroup('ServiceContainerAppsEnvironmentsGroup', 'Service Container Apps Environments Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

