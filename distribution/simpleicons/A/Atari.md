# Atari


```text
simpleicons/A/Atari
```

```text
include('simpleicons/A/Atari')
```



| Illustration | Atari |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Atari.png) | ![illustration for Atari](../../simpleicons/A/Atari.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AtariXs>`
- `<$AtariSm>`
- `<$AtariMd>`
- `<$AtariLg>`





## Atari

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Atari
include('simpleicons/A/Atari')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Atari
include('simpleicons/A/Atari')

' renders the element
Atari('Atari', 'Atari', 'an optional tech label', 'an optional description')
@enduml
```

