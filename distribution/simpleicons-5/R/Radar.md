# Radar


```text
simpleicons-5/R/Radar
```

```text
include('simpleicons-5/R/Radar')
```



| Illustration | Radar |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Radar.png) | ![illustration for Radar](../../simpleicons-5/R/Radar.Local.png) |




## Radar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Radar
include('simpleicons-5/R/Radar')

' renders the element
Radar('Radar', 'Radar', 'an optional tech label')
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

' loads the Item which embeds the element Radar
include('simpleicons-5/R/Radar')

' renders the element
Radar('Radar', 'Radar', 'an optional tech label')
@enduml
```

