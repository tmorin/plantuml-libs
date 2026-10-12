# Ghostfolio


```text
simpleicons/G/Ghostfolio
```

```text
include('simpleicons/G/Ghostfolio')
```



| Illustration | Ghostfolio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Ghostfolio.png) | ![illustration for Ghostfolio](../../simpleicons/G/Ghostfolio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GhostfolioXs>`
- `<$GhostfolioSm>`
- `<$GhostfolioMd>`
- `<$GhostfolioLg>`





## Ghostfolio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ghostfolio
include('simpleicons/G/Ghostfolio')

' renders the element
Ghostfolio('Ghostfolio', 'Ghostfolio', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ghostfolio
include('simpleicons/G/Ghostfolio')

' renders the element
Ghostfolio('Ghostfolio', 'Ghostfolio', 'an optional tech label', 'an optional description')
@enduml
```

