# Marker


```text
fontawesome/Solid/Marker
```

```text
include('fontawesome/Solid/Marker')
```



| Illustration | Marker |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Marker.png) | ![illustration for Marker](../../fontawesome/Solid/Marker.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MarkerXs>`
- `<$MarkerSm>`
- `<$MarkerMd>`
- `<$MarkerLg>`





## Marker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Marker
include('fontawesome/Solid/Marker')

' renders the element
Marker('Marker', 'Marker', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Marker
include('fontawesome/Solid/Marker')

' renders the element
Marker('Marker', 'Marker', 'an optional tech label', 'an optional description')
@enduml
```

