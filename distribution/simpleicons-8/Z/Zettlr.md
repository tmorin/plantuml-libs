# Zettlr


```text
simpleicons-8/Z/Zettlr
```

```text
include('simpleicons-8/Z/Zettlr')
```



| Illustration | Zettlr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/Z/Zettlr.png) | ![illustration for Zettlr](../../simpleicons-8/Z/Zettlr.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZettlrXs>`
- `<$ZettlrSm>`
- `<$ZettlrMd>`
- `<$ZettlrLg>`





## Zettlr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Zettlr
include('simpleicons-8/Z/Zettlr')

' renders the element
Zettlr('Zettlr', 'Zettlr', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zettlr
include('simpleicons-8/Z/Zettlr')

' renders the element
Zettlr('Zettlr', 'Zettlr', 'an optional tech label', 'an optional description')
@enduml
```

