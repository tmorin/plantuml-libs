# Radar


```text
simpleicons-14/R/Radar
```

```text
include('simpleicons-14/R/Radar')
```



| Illustration | Radar |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Radar.png) | ![illustration for Radar](../../simpleicons-14/R/Radar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RadarXs>`
- `<$RadarSm>`
- `<$RadarMd>`
- `<$RadarLg>`





## Radar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Radar
include('simpleicons-14/R/Radar')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Radar
include('simpleicons-14/R/Radar')

' renders the element
Radar('Radar', 'Radar', 'an optional tech label', 'an optional description')
@enduml
```

