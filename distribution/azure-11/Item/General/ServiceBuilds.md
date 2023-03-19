# ServiceBuilds


```text
azure-11/Item/General/ServiceBuilds
```

```text
include('azure-11/Item/General/ServiceBuilds')
```



| Illustration | ServiceBuilds | ServiceBuildsCard | ServiceBuildsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/General/ServiceBuilds.png) | ![illustration for ServiceBuilds](../../../azure-11/Item/General/ServiceBuilds.Local.png) | ![illustration for ServiceBuildsCard](../../../azure-11/Item/General/ServiceBuildsCard.Local.png) | ![illustration for ServiceBuildsGroup](../../../azure-11/Item/General/ServiceBuildsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceBuildsXs>`
- `<$ServiceBuildsSm>`
- `<$ServiceBuildsMd>`
- `<$ServiceBuildsLg>`





## ServiceBuilds

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceBuilds
include('azure-11/Item/General/ServiceBuilds')

' renders the element
ServiceBuilds('ServiceBuilds', 'Service Builds', 'an optional tech label', 'an optional description')
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceBuilds
include('azure-11/Item/General/ServiceBuilds')

' renders the element
ServiceBuilds('ServiceBuilds', 'Service Builds', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceBuildsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceBuildsCard
include('azure-11/Item/General/ServiceBuilds')

' renders the element
ServiceBuildsCard('ServiceBuildsCard', 'Service Builds Card', 'an optional description')
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceBuildsCard
include('azure-11/Item/General/ServiceBuilds')

' renders the element
ServiceBuildsCard('ServiceBuildsCard', 'Service Builds Card', 'an optional description')
@enduml
```

## ServiceBuildsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceBuildsGroup
include('azure-11/Item/General/ServiceBuilds')

' renders the element
ServiceBuildsGroup('ServiceBuildsGroup', 'Service Builds Group', 'an optional tech label') {
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceBuildsGroup
include('azure-11/Item/General/ServiceBuilds')

' renders the element
ServiceBuildsGroup('ServiceBuildsGroup', 'Service Builds Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

