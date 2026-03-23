# ServiceNetworkManagers


```text
azure/Item/Other/ServiceNetworkManagers
```

```text
include('azure/Item/Other/ServiceNetworkManagers')
```



| Illustration | ServiceNetworkManagers | ServiceNetworkManagersCard | ServiceNetworkManagersGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Other/ServiceNetworkManagers.png) | ![illustration for ServiceNetworkManagers](../../../azure/Item/Other/ServiceNetworkManagers.Local.png) | ![illustration for ServiceNetworkManagersCard](../../../azure/Item/Other/ServiceNetworkManagersCard.Local.png) | ![illustration for ServiceNetworkManagersGroup](../../../azure/Item/Other/ServiceNetworkManagersGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceNetworkManagersXs>`
- `<$ServiceNetworkManagersSm>`
- `<$ServiceNetworkManagersMd>`
- `<$ServiceNetworkManagersLg>`





## ServiceNetworkManagers

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceNetworkManagers
include('azure/Item/Other/ServiceNetworkManagers')

' renders the element
ServiceNetworkManagers('ServiceNetworkManagers', 'Service Network Managers', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceNetworkManagers
include('azure/Item/Other/ServiceNetworkManagers')

' renders the element
ServiceNetworkManagers('ServiceNetworkManagers', 'Service Network Managers', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceNetworkManagersCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceNetworkManagersCard
include('azure/Item/Other/ServiceNetworkManagers')

' renders the element
ServiceNetworkManagersCard('ServiceNetworkManagersCard', 'Service Network Managers Card', 'an optional description')
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

' loads the Item which embeds the element ServiceNetworkManagersCard
include('azure/Item/Other/ServiceNetworkManagers')

' renders the element
ServiceNetworkManagersCard('ServiceNetworkManagersCard', 'Service Network Managers Card', 'an optional description')
@enduml
```

## ServiceNetworkManagersGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceNetworkManagersGroup
include('azure/Item/Other/ServiceNetworkManagers')

' renders the element
ServiceNetworkManagersGroup('ServiceNetworkManagersGroup', 'Service Network Managers Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceNetworkManagersGroup
include('azure/Item/Other/ServiceNetworkManagers')

' renders the element
ServiceNetworkManagersGroup('ServiceNetworkManagersGroup', 'Service Network Managers Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

