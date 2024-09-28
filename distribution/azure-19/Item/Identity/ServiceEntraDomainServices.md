# ServiceEntraDomainServices


```text
azure-19/Item/Identity/ServiceEntraDomainServices
```

```text
include('azure-19/Item/Identity/ServiceEntraDomainServices')
```



| Illustration | ServiceEntraDomainServices | ServiceEntraDomainServicesCard | ServiceEntraDomainServicesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-19/Item/Identity/ServiceEntraDomainServices.png) | ![illustration for ServiceEntraDomainServices](../../../azure-19/Item/Identity/ServiceEntraDomainServices.Local.png) | ![illustration for ServiceEntraDomainServicesCard](../../../azure-19/Item/Identity/ServiceEntraDomainServicesCard.Local.png) | ![illustration for ServiceEntraDomainServicesGroup](../../../azure-19/Item/Identity/ServiceEntraDomainServicesGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceEntraDomainServicesXs>`
- `<$ServiceEntraDomainServicesSm>`
- `<$ServiceEntraDomainServicesMd>`
- `<$ServiceEntraDomainServicesLg>`





## ServiceEntraDomainServices

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceEntraDomainServices
include('azure-19/Item/Identity/ServiceEntraDomainServices')

' renders the element
ServiceEntraDomainServices('ServiceEntraDomainServices', 'Service Entra Domain Services', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceEntraDomainServices
include('azure-19/Item/Identity/ServiceEntraDomainServices')

' renders the element
ServiceEntraDomainServices('ServiceEntraDomainServices', 'Service Entra Domain Services', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceEntraDomainServicesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceEntraDomainServicesCard
include('azure-19/Item/Identity/ServiceEntraDomainServices')

' renders the element
ServiceEntraDomainServicesCard('ServiceEntraDomainServicesCard', 'Service Entra Domain Services Card', 'an optional description')
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

' loads the Item which embeds the element ServiceEntraDomainServicesCard
include('azure-19/Item/Identity/ServiceEntraDomainServices')

' renders the element
ServiceEntraDomainServicesCard('ServiceEntraDomainServicesCard', 'Service Entra Domain Services Card', 'an optional description')
@enduml
```

## ServiceEntraDomainServicesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceEntraDomainServicesGroup
include('azure-19/Item/Identity/ServiceEntraDomainServices')

' renders the element
ServiceEntraDomainServicesGroup('ServiceEntraDomainServicesGroup', 'Service Entra Domain Services Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceEntraDomainServicesGroup
include('azure-19/Item/Identity/ServiceEntraDomainServices')

' renders the element
ServiceEntraDomainServicesGroup('ServiceEntraDomainServicesGroup', 'Service Entra Domain Services Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

