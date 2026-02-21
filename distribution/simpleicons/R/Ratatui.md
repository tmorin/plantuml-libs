# Ratatui


```text
simpleicons/R/Ratatui
```

```text
include('simpleicons/R/Ratatui')
```



| Illustration | Ratatui |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Ratatui.png) | ![illustration for Ratatui](../../simpleicons/R/Ratatui.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RatatuiXs>`
- `<$RatatuiSm>`
- `<$RatatuiMd>`
- `<$RatatuiLg>`





## Ratatui

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ratatui
include('simpleicons/R/Ratatui')

' renders the element
Ratatui('Ratatui', 'Ratatui', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ratatui
include('simpleicons/R/Ratatui')

' renders the element
Ratatui('Ratatui', 'Ratatui', 'an optional tech label', 'an optional description')
@enduml
```

