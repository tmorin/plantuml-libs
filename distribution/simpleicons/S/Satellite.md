# Satellite


```text
simpleicons/S/Satellite
```

```text
include('simpleicons/S/Satellite')
```



| Illustration | Satellite |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Satellite.png) | ![illustration for Satellite](../../simpleicons/S/Satellite.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SatelliteXs>`
- `<$SatelliteSm>`
- `<$SatelliteMd>`
- `<$SatelliteLg>`





## Satellite

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Satellite
include('simpleicons/S/Satellite')

' renders the element
Satellite('Satellite', 'Satellite', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Satellite
include('simpleicons/S/Satellite')

' renders the element
Satellite('Satellite', 'Satellite', 'an optional tech label', 'an optional description')
@enduml
```

