# Moleculer


```text
simpleicons-5/M/Moleculer
```

```text
include('simpleicons-5/M/Moleculer')
```



| Illustration | Moleculer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Moleculer.png) | ![illustration for Moleculer](../../simpleicons-5/M/Moleculer.Local.png) |




## Moleculer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Moleculer
include('simpleicons-5/M/Moleculer')

' renders the element
Moleculer('Moleculer', 'Moleculer', 'an optional tech label')
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

' loads the Item which embeds the element Moleculer
include('simpleicons-5/M/Moleculer')

' renders the element
Moleculer('Moleculer', 'Moleculer', 'an optional tech label')
@enduml
```

