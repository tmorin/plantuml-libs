# CloudRouter


```text
gcp/Item/CloudRouter
```

```text
include('gcp/Item/CloudRouter')
```



| Illustration | CloudRouter | CloudRouterCard | CloudRouterGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/CloudRouter.png) | ![illustration for CloudRouter](../../gcp/Item/CloudRouter.Local.png) | ![illustration for CloudRouterCard](../../gcp/Item/CloudRouterCard.Local.png) | ![illustration for CloudRouterGroup](../../gcp/Item/CloudRouterGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudRouterXs>`
- `<$CloudRouterSm>`
- `<$CloudRouterMd>`
- `<$CloudRouterLg>`





## CloudRouter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudRouter
include('gcp/Item/CloudRouter')

' renders the element
CloudRouter('CloudRouter', 'Cloud Router', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudRouter
include('gcp/Item/CloudRouter')

' renders the element
CloudRouter('CloudRouter', 'Cloud Router', 'an optional tech label', 'an optional description')
@enduml
```

## CloudRouterCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudRouterCard
include('gcp/Item/CloudRouter')

' renders the element
CloudRouterCard('CloudRouterCard', 'Cloud Router Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudRouterCard
include('gcp/Item/CloudRouter')

' renders the element
CloudRouterCard('CloudRouterCard', 'Cloud Router Card', 'an optional description')
@enduml
```

## CloudRouterGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudRouterGroup
include('gcp/Item/CloudRouter')

' renders the element
CloudRouterGroup('CloudRouterGroup', 'Cloud Router Group', 'an optional tech label') {
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
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudRouterGroup
include('gcp/Item/CloudRouter')

' renders the element
CloudRouterGroup('CloudRouterGroup', 'Cloud Router Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

