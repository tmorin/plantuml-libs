# Zsh


```text
simpleicons/Z/Zsh
```

```text
include('simpleicons/Z/Zsh')
```



| Illustration | Zsh |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Z/Zsh.png) | ![illustration for Zsh](../../simpleicons/Z/Zsh.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZshXs>`
- `<$ZshSm>`
- `<$ZshMd>`
- `<$ZshLg>`





## Zsh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Zsh
include('simpleicons/Z/Zsh')

' renders the element
Zsh('Zsh', 'Zsh', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zsh
include('simpleicons/Z/Zsh')

' renders the element
Zsh('Zsh', 'Zsh', 'an optional tech label', 'an optional description')
@enduml
```

