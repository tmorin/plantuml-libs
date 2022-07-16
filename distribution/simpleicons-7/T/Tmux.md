# Tmux


```text
simpleicons-7/T/Tmux
```

```text
include('simpleicons-7/T/Tmux')
```



| Illustration | Tmux |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Tmux.png) | ![illustration for Tmux](../../simpleicons-7/T/Tmux.Local.png) |




## Tmux

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Tmux
include('simpleicons-7/T/Tmux')

' renders the element
Tmux('Tmux', 'Tmux', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Tmux
include('simpleicons-7/T/Tmux')

' renders the element
Tmux('Tmux', 'Tmux', 'an optional tech label')
@enduml
```

