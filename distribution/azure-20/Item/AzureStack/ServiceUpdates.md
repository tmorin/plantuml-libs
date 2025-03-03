# ServiceUpdates


```text
azure-20/Item/AzureStack/ServiceUpdates
```

```text
include('azure-20/Item/AzureStack/ServiceUpdates')
```



| Illustration | ServiceUpdates | ServiceUpdatesCard | ServiceUpdatesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/AzureStack/ServiceUpdates.png) | ![illustration for ServiceUpdates](../../../azure-20/Item/AzureStack/ServiceUpdates.Local.png) | ![illustration for ServiceUpdatesCard](../../../azure-20/Item/AzureStack/ServiceUpdatesCard.Local.png) | ![illustration for ServiceUpdatesGroup](../../../azure-20/Item/AzureStack/ServiceUpdatesGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceUpdatesXs>`
- `<$ServiceUpdatesSm>`
- `<$ServiceUpdatesMd>`
- `<$ServiceUpdatesLg>`





## ServiceUpdates

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceUpdates
include('azure-20/Item/AzureStack/ServiceUpdates')

' renders the element
ServiceUpdates('ServiceUpdates', 'Service Updates', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceUpdates
include('azure-20/Item/AzureStack/ServiceUpdates')

' renders the element
ServiceUpdates('ServiceUpdates', 'Service Updates', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceUpdatesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceUpdatesCard
include('azure-20/Item/AzureStack/ServiceUpdates')

' renders the element
ServiceUpdatesCard('ServiceUpdatesCard', 'Service Updates Card', 'an optional description')
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

' loads the Item which embeds the element ServiceUpdatesCard
include('azure-20/Item/AzureStack/ServiceUpdates')

' renders the element
ServiceUpdatesCard('ServiceUpdatesCard', 'Service Updates Card', 'an optional description')
@enduml
```

## ServiceUpdatesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceUpdatesGroup
include('azure-20/Item/AzureStack/ServiceUpdates')

' renders the element
ServiceUpdatesGroup('ServiceUpdatesGroup', 'Service Updates Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceUpdatesGroup
include('azure-20/Item/AzureStack/ServiceUpdates')

' renders the element
ServiceUpdatesGroup('ServiceUpdatesGroup', 'Service Updates Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

