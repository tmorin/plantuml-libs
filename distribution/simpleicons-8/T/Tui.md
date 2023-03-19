# Tui


```text
simpleicons-8/T/Tui
```

```text
include('simpleicons-8/T/Tui')
```



| Illustration | Tui |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Tui.png) | ![illustration for Tui](../../simpleicons-8/T/Tui.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TuiXs>`
- `<$TuiSm>`
- `<$TuiMd>`
- `<$TuiLg>`





## Tui

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Tui
include('simpleicons-8/T/Tui')

' renders the element
Tui('Tui', 'Tui', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tui
include('simpleicons-8/T/Tui')

' renders the element
Tui('Tui', 'Tui', 'an optional tech label', 'an optional description')
@enduml
```

