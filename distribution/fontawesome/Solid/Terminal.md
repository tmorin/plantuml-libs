# Terminal


```text
fontawesome/Solid/Terminal
```

```text
include('fontawesome/Solid/Terminal')
```



| Illustration | Terminal |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Terminal.png) | ![illustration for Terminal](../../fontawesome/Solid/Terminal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TerminalXs>`
- `<$TerminalSm>`
- `<$TerminalMd>`
- `<$TerminalLg>`





## Terminal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Terminal
include('fontawesome/Solid/Terminal')

' renders the element
Terminal('Terminal', 'Terminal', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Terminal
include('fontawesome/Solid/Terminal')

' renders the element
Terminal('Terminal', 'Terminal', 'an optional tech label', 'an optional description')
@enduml
```

