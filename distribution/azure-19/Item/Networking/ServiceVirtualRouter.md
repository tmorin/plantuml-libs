# ServiceVirtualRouter


```text
azure-19/Item/Networking/ServiceVirtualRouter
```

```text
include('azure-19/Item/Networking/ServiceVirtualRouter')
```



| Illustration | ServiceVirtualRouter | ServiceVirtualRouterCard | ServiceVirtualRouterGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-19/Item/Networking/ServiceVirtualRouter.png) | ![illustration for ServiceVirtualRouter](../../../azure-19/Item/Networking/ServiceVirtualRouter.Local.png) | ![illustration for ServiceVirtualRouterCard](../../../azure-19/Item/Networking/ServiceVirtualRouterCard.Local.png) | ![illustration for ServiceVirtualRouterGroup](../../../azure-19/Item/Networking/ServiceVirtualRouterGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceVirtualRouterXs>`
- `<$ServiceVirtualRouterSm>`
- `<$ServiceVirtualRouterMd>`
- `<$ServiceVirtualRouterLg>`





## ServiceVirtualRouter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceVirtualRouter
include('azure-19/Item/Networking/ServiceVirtualRouter')

' renders the element
ServiceVirtualRouter('ServiceVirtualRouter', 'Service Virtual Router', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceVirtualRouter
include('azure-19/Item/Networking/ServiceVirtualRouter')

' renders the element
ServiceVirtualRouter('ServiceVirtualRouter', 'Service Virtual Router', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceVirtualRouterCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceVirtualRouterCard
include('azure-19/Item/Networking/ServiceVirtualRouter')

' renders the element
ServiceVirtualRouterCard('ServiceVirtualRouterCard', 'Service Virtual Router Card', 'an optional description')
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

' loads the Item which embeds the element ServiceVirtualRouterCard
include('azure-19/Item/Networking/ServiceVirtualRouter')

' renders the element
ServiceVirtualRouterCard('ServiceVirtualRouterCard', 'Service Virtual Router Card', 'an optional description')
@enduml
```

## ServiceVirtualRouterGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceVirtualRouterGroup
include('azure-19/Item/Networking/ServiceVirtualRouter')

' renders the element
ServiceVirtualRouterGroup('ServiceVirtualRouterGroup', 'Service Virtual Router Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceVirtualRouterGroup
include('azure-19/Item/Networking/ServiceVirtualRouter')

' renders the element
ServiceVirtualRouterGroup('ServiceVirtualRouterGroup', 'Service Virtual Router Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

