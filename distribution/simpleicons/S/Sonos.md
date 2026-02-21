# Sonos


```text
simpleicons/S/Sonos
```

```text
include('simpleicons/S/Sonos')
```



| Illustration | Sonos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Sonos.png) | ![illustration for Sonos](../../simpleicons/S/Sonos.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SonosXs>`
- `<$SonosSm>`
- `<$SonosMd>`
- `<$SonosLg>`





## Sonos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Sonos
include('simpleicons/S/Sonos')

' renders the element
Sonos('Sonos', 'Sonos', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sonos
include('simpleicons/S/Sonos')

' renders the element
Sonos('Sonos', 'Sonos', 'an optional tech label', 'an optional description')
@enduml
```

