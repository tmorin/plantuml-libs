# ServiceAppServices


```text
azure-19/Item/Containers/ServiceAppServices
```

```text
include('azure-19/Item/Containers/ServiceAppServices')
```



| Illustration | ServiceAppServices | ServiceAppServicesCard | ServiceAppServicesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-19/Item/Containers/ServiceAppServices.png) | ![illustration for ServiceAppServices](../../../azure-19/Item/Containers/ServiceAppServices.Local.png) | ![illustration for ServiceAppServicesCard](../../../azure-19/Item/Containers/ServiceAppServicesCard.Local.png) | ![illustration for ServiceAppServicesGroup](../../../azure-19/Item/Containers/ServiceAppServicesGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceAppServicesXs>`
- `<$ServiceAppServicesSm>`
- `<$ServiceAppServicesMd>`
- `<$ServiceAppServicesLg>`





## ServiceAppServices

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAppServices
include('azure-19/Item/Containers/ServiceAppServices')

' renders the element
ServiceAppServices('ServiceAppServices', 'Service App Services', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceAppServices
include('azure-19/Item/Containers/ServiceAppServices')

' renders the element
ServiceAppServices('ServiceAppServices', 'Service App Services', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAppServicesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAppServicesCard
include('azure-19/Item/Containers/ServiceAppServices')

' renders the element
ServiceAppServicesCard('ServiceAppServicesCard', 'Service App Services Card', 'an optional description')
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

' loads the Item which embeds the element ServiceAppServicesCard
include('azure-19/Item/Containers/ServiceAppServices')

' renders the element
ServiceAppServicesCard('ServiceAppServicesCard', 'Service App Services Card', 'an optional description')
@enduml
```

## ServiceAppServicesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAppServicesGroup
include('azure-19/Item/Containers/ServiceAppServices')

' renders the element
ServiceAppServicesGroup('ServiceAppServicesGroup', 'Service App Services Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceAppServicesGroup
include('azure-19/Item/Containers/ServiceAppServices')

' renders the element
ServiceAppServicesGroup('ServiceAppServicesGroup', 'Service App Services Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

