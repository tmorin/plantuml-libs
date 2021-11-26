# Marker


```text
fontawesome-5/Solid/Marker
```

```text
include('fontawesome-5/Solid/Marker')
```



| Illustration | Marker |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Marker.png) | ![illustration for Marker](../../fontawesome-5/Solid/Marker.Local.png) |




## Marker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Marker
include('fontawesome-5/Solid/Marker')

' renders the element
Marker('Marker', 'Marker', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Marker
include('fontawesome-5/Solid/Marker')

' renders the element
Marker('Marker', 'Marker', 'an optional tech label')
@enduml
```

