# ServiceAppRegistrations


```text
azure-20/Item/Other/ServiceAppRegistrations
```

```text
include('azure-20/Item/Other/ServiceAppRegistrations')
```



| Illustration | ServiceAppRegistrations | ServiceAppRegistrationsCard | ServiceAppRegistrationsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/Other/ServiceAppRegistrations.png) | ![illustration for ServiceAppRegistrations](../../../azure-20/Item/Other/ServiceAppRegistrations.Local.png) | ![illustration for ServiceAppRegistrationsCard](../../../azure-20/Item/Other/ServiceAppRegistrationsCard.Local.png) | ![illustration for ServiceAppRegistrationsGroup](../../../azure-20/Item/Other/ServiceAppRegistrationsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceAppRegistrationsXs>`
- `<$ServiceAppRegistrationsSm>`
- `<$ServiceAppRegistrationsMd>`
- `<$ServiceAppRegistrationsLg>`





## ServiceAppRegistrations

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceAppRegistrations
include('azure-20/Item/Other/ServiceAppRegistrations')

' renders the element
ServiceAppRegistrations('ServiceAppRegistrations', 'Service App Registrations', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceAppRegistrations
include('azure-20/Item/Other/ServiceAppRegistrations')

' renders the element
ServiceAppRegistrations('ServiceAppRegistrations', 'Service App Registrations', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAppRegistrationsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceAppRegistrationsCard
include('azure-20/Item/Other/ServiceAppRegistrations')

' renders the element
ServiceAppRegistrationsCard('ServiceAppRegistrationsCard', 'Service App Registrations Card', 'an optional description')
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

' loads the Item which embeds the element ServiceAppRegistrationsCard
include('azure-20/Item/Other/ServiceAppRegistrations')

' renders the element
ServiceAppRegistrationsCard('ServiceAppRegistrationsCard', 'Service App Registrations Card', 'an optional description')
@enduml
```

## ServiceAppRegistrationsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceAppRegistrationsGroup
include('azure-20/Item/Other/ServiceAppRegistrations')

' renders the element
ServiceAppRegistrationsGroup('ServiceAppRegistrationsGroup', 'Service App Registrations Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceAppRegistrationsGroup
include('azure-20/Item/Other/ServiceAppRegistrations')

' renders the element
ServiceAppRegistrationsGroup('ServiceAppRegistrationsGroup', 'Service App Registrations Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

