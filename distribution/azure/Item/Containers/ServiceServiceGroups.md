# ServiceServiceGroups


```text
azure/Item/Containers/ServiceServiceGroups
```

```text
include('azure/Item/Containers/ServiceServiceGroups')
```



| Illustration | ServiceServiceGroups | ServiceServiceGroupsCard | ServiceServiceGroupsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Containers/ServiceServiceGroups.png) | ![illustration for ServiceServiceGroups](../../../azure/Item/Containers/ServiceServiceGroups.Local.png) | ![illustration for ServiceServiceGroupsCard](../../../azure/Item/Containers/ServiceServiceGroupsCard.Local.png) | ![illustration for ServiceServiceGroupsGroup](../../../azure/Item/Containers/ServiceServiceGroupsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceServiceGroupsXs>`
- `<$ServiceServiceGroupsSm>`
- `<$ServiceServiceGroupsMd>`
- `<$ServiceServiceGroupsLg>`





## ServiceServiceGroups

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceServiceGroups
include('azure/Item/Containers/ServiceServiceGroups')

' renders the element
ServiceServiceGroups('ServiceServiceGroups', 'Service Service Groups', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceServiceGroups
include('azure/Item/Containers/ServiceServiceGroups')

' renders the element
ServiceServiceGroups('ServiceServiceGroups', 'Service Service Groups', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceServiceGroupsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceServiceGroupsCard
include('azure/Item/Containers/ServiceServiceGroups')

' renders the element
ServiceServiceGroupsCard('ServiceServiceGroupsCard', 'Service Service Groups Card', 'an optional description')
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

' loads the Item which embeds the element ServiceServiceGroupsCard
include('azure/Item/Containers/ServiceServiceGroups')

' renders the element
ServiceServiceGroupsCard('ServiceServiceGroupsCard', 'Service Service Groups Card', 'an optional description')
@enduml
```

## ServiceServiceGroupsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceServiceGroupsGroup
include('azure/Item/Containers/ServiceServiceGroups')

' renders the element
ServiceServiceGroupsGroup('ServiceServiceGroupsGroup', 'Service Service Groups Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceServiceGroupsGroup
include('azure/Item/Containers/ServiceServiceGroups')

' renders the element
ServiceServiceGroupsGroup('ServiceServiceGroupsGroup', 'Service Service Groups Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

