# Sonos


```text
simpleicons-6/S/Sonos
```

```text
include('simpleicons-6/S/Sonos')
```



| Illustration | Sonos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Sonos.png) | ![illustration for Sonos](../../simpleicons-6/S/Sonos.Local.png) |




## Sonos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Sonos
include('simpleicons-6/S/Sonos')

' renders the element
Sonos('Sonos', 'Sonos', 'an optional tech label')
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

' loads the Item which embeds the element Sonos
include('simpleicons-6/S/Sonos')

' renders the element
Sonos('Sonos', 'Sonos', 'an optional tech label')
@enduml
```

