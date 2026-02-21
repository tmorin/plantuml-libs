# LocationCrosshairs


```text
fontawesome/Solid/LocationCrosshairs
```

```text
include('fontawesome/Solid/LocationCrosshairs')
```



| Illustration | LocationCrosshairs |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/LocationCrosshairs.png) | ![illustration for LocationCrosshairs](../../fontawesome/Solid/LocationCrosshairs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocationCrosshairsXs>`
- `<$LocationCrosshairsSm>`
- `<$LocationCrosshairsMd>`
- `<$LocationCrosshairsLg>`





## LocationCrosshairs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LocationCrosshairs
include('fontawesome/Solid/LocationCrosshairs')

' renders the element
LocationCrosshairs('LocationCrosshairs', 'Location Crosshairs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LocationCrosshairs
include('fontawesome/Solid/LocationCrosshairs')

' renders the element
LocationCrosshairs('LocationCrosshairs', 'Location Crosshairs', 'an optional tech label', 'an optional description')
@enduml
```

