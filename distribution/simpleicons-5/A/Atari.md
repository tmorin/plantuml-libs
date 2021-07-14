# Atari


```text
simpleicons-5/A/Atari
```

```text
include('simpleicons-5/A/Atari')
```



| Illustration | Atari |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Atari.png) | ![illustration for Atari](../../simpleicons-5/A/Atari.Local.png) |




## Atari

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Atari
include('simpleicons-5/A/Atari')

' renders the element
Atari('Atari', 'Atari', 'an optional tech label')
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

' loads the Item which embeds the element Atari
include('simpleicons-5/A/Atari')

' renders the element
Atari('Atari', 'Atari', 'an optional tech label')
@enduml
```

