# Radar


```text
simpleicons-8/R/Radar
```

```text
include('simpleicons-8/R/Radar')
```



| Illustration | Radar |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/R/Radar.png) | ![illustration for Radar](../../simpleicons-8/R/Radar.Local.png) |




## Radar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Radar
include('simpleicons-8/R/Radar')

' renders the element
Radar('Radar', 'Radar', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Radar
include('simpleicons-8/R/Radar')

' renders the element
Radar('Radar', 'Radar', 'an optional tech label', 'an optional description')
@enduml
```

