# Tui


```text
simpleicons-6/T/Tui
```

```text
include('simpleicons-6/T/Tui')
```



| Illustration | Tui |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/T/Tui.png) | ![illustration for Tui](../../simpleicons-6/T/Tui.Local.png) |




## Tui

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Tui
include('simpleicons-6/T/Tui')

' renders the element
Tui('Tui', 'Tui', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Tui
include('simpleicons-6/T/Tui')

' renders the element
Tui('Tui', 'Tui', 'an optional tech label')
@enduml
```

