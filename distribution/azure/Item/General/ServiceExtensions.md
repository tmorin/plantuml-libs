# ServiceExtensions


```text
azure/Item/General/ServiceExtensions
```

```text
include('azure/Item/General/ServiceExtensions')
```



| Illustration | ServiceExtensions | ServiceExtensionsCard | ServiceExtensionsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/General/ServiceExtensions.png) | ![illustration for ServiceExtensions](../../../azure/Item/General/ServiceExtensions.Local.png) | ![illustration for ServiceExtensionsCard](../../../azure/Item/General/ServiceExtensionsCard.Local.png) | ![illustration for ServiceExtensionsGroup](../../../azure/Item/General/ServiceExtensionsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceExtensionsXs>`
- `<$ServiceExtensionsSm>`
- `<$ServiceExtensionsMd>`
- `<$ServiceExtensionsLg>`





## ServiceExtensions

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceExtensions
include('azure/Item/General/ServiceExtensions')

' renders the element
ServiceExtensions('ServiceExtensions', 'Service Extensions', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceExtensions
include('azure/Item/General/ServiceExtensions')

' renders the element
ServiceExtensions('ServiceExtensions', 'Service Extensions', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceExtensionsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceExtensionsCard
include('azure/Item/General/ServiceExtensions')

' renders the element
ServiceExtensionsCard('ServiceExtensionsCard', 'Service Extensions Card', 'an optional description')
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

' loads the Item which embeds the element ServiceExtensionsCard
include('azure/Item/General/ServiceExtensions')

' renders the element
ServiceExtensionsCard('ServiceExtensionsCard', 'Service Extensions Card', 'an optional description')
@enduml
```

## ServiceExtensionsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceExtensionsGroup
include('azure/Item/General/ServiceExtensions')

' renders the element
ServiceExtensionsGroup('ServiceExtensionsGroup', 'Service Extensions Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceExtensionsGroup
include('azure/Item/General/ServiceExtensions')

' renders the element
ServiceExtensionsGroup('ServiceExtensionsGroup', 'Service Extensions Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

