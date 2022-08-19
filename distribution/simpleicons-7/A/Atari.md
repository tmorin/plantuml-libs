# Atari


```text
simpleicons-7/A/Atari
```

```text
include('simpleicons-7/A/Atari')
```



| Illustration | Atari |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Atari.png) | ![illustration for Atari](../../simpleicons-7/A/Atari.Local.png) |




## Atari

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Atari
include('simpleicons-7/A/Atari')

' renders the element
Atari('Atari', 'Atari', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Atari
include('simpleicons-7/A/Atari')

' renders the element
Atari('Atari', 'Atari', 'an optional tech label', 'an optional description')
@enduml
```
