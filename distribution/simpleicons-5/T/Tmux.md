# Tmux


```text
simpleicons-5/T/Tmux
```

```text
include('simpleicons-5/T/Tmux')
```



| Illustration | Tmux |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Tmux.png) | ![illustration for Tmux](../../simpleicons-5/T/Tmux.Local.png) |




## Tmux

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Tmux
include('simpleicons-5/T/Tmux')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Tmux
include('simpleicons-5/T/Tmux')

' renders the element
Tmux('Tmux', 'Tmux', 'an optional tech label')
@enduml
```

