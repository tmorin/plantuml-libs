# Ghostery


```text
simpleicons-8/G/Ghostery
```

```text
include('simpleicons-8/G/Ghostery')
```



| Illustration | Ghostery |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Ghostery.png) | ![illustration for Ghostery](../../simpleicons-8/G/Ghostery.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GhosteryXs>`
- `<$GhosterySm>`
- `<$GhosteryMd>`
- `<$GhosteryLg>`





## Ghostery

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Ghostery
include('simpleicons-8/G/Ghostery')

' renders the element
Ghostery('Ghostery', 'Ghostery', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Ghostery
include('simpleicons-8/G/Ghostery')

' renders the element
Ghostery('Ghostery', 'Ghostery', 'an optional tech label', 'an optional description')
@enduml
```

