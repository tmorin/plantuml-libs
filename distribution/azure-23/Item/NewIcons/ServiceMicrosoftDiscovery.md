# ServiceMicrosoftDiscovery


```text
azure-23/Item/NewIcons/ServiceMicrosoftDiscovery
```

```text
include('azure-23/Item/NewIcons/ServiceMicrosoftDiscovery')
```



| Illustration | ServiceMicrosoftDiscovery | ServiceMicrosoftDiscoveryCard | ServiceMicrosoftDiscoveryGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-23/Item/NewIcons/ServiceMicrosoftDiscovery.png) | ![illustration for ServiceMicrosoftDiscovery](../../../azure-23/Item/NewIcons/ServiceMicrosoftDiscovery.Local.png) | ![illustration for ServiceMicrosoftDiscoveryCard](../../../azure-23/Item/NewIcons/ServiceMicrosoftDiscoveryCard.Local.png) | ![illustration for ServiceMicrosoftDiscoveryGroup](../../../azure-23/Item/NewIcons/ServiceMicrosoftDiscoveryGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceMicrosoftDiscoveryXs>`
- `<$ServiceMicrosoftDiscoverySm>`
- `<$ServiceMicrosoftDiscoveryMd>`
- `<$ServiceMicrosoftDiscoveryLg>`





## ServiceMicrosoftDiscovery

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-23/bootstrap')

' loads the Item which embeds the element ServiceMicrosoftDiscovery
include('azure-23/Item/NewIcons/ServiceMicrosoftDiscovery')

' renders the element
ServiceMicrosoftDiscovery('ServiceMicrosoftDiscovery', 'Service Microsoft Discovery', 'an optional tech label', 'an optional description')
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
include('azure-23/bootstrap')

' loads the Item which embeds the element ServiceMicrosoftDiscovery
include('azure-23/Item/NewIcons/ServiceMicrosoftDiscovery')

' renders the element
ServiceMicrosoftDiscovery('ServiceMicrosoftDiscovery', 'Service Microsoft Discovery', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceMicrosoftDiscoveryCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-23/bootstrap')

' loads the Item which embeds the element ServiceMicrosoftDiscoveryCard
include('azure-23/Item/NewIcons/ServiceMicrosoftDiscovery')

' renders the element
ServiceMicrosoftDiscoveryCard('ServiceMicrosoftDiscoveryCard', 'Service Microsoft Discovery Card', 'an optional description')
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
include('azure-23/bootstrap')

' loads the Item which embeds the element ServiceMicrosoftDiscoveryCard
include('azure-23/Item/NewIcons/ServiceMicrosoftDiscovery')

' renders the element
ServiceMicrosoftDiscoveryCard('ServiceMicrosoftDiscoveryCard', 'Service Microsoft Discovery Card', 'an optional description')
@enduml
```

## ServiceMicrosoftDiscoveryGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-23/bootstrap')

' loads the Item which embeds the element ServiceMicrosoftDiscoveryGroup
include('azure-23/Item/NewIcons/ServiceMicrosoftDiscovery')

' renders the element
ServiceMicrosoftDiscoveryGroup('ServiceMicrosoftDiscoveryGroup', 'Service Microsoft Discovery Group', 'an optional tech label') {
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
include('azure-23/bootstrap')

' loads the Item which embeds the element ServiceMicrosoftDiscoveryGroup
include('azure-23/Item/NewIcons/ServiceMicrosoftDiscovery')

' renders the element
ServiceMicrosoftDiscoveryGroup('ServiceMicrosoftDiscoveryGroup', 'Service Microsoft Discovery Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

