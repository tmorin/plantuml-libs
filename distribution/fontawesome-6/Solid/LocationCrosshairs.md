# LocationCrosshairs


```text
fontawesome-6/Solid/LocationCrosshairs
```

```text
include('fontawesome-6/Solid/LocationCrosshairs')
```



| Illustration | LocationCrosshairs |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/LocationCrosshairs.png) | ![illustration for LocationCrosshairs](../../fontawesome-6/Solid/LocationCrosshairs.Local.png) |




## LocationCrosshairs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element LocationCrosshairs
include('fontawesome-6/Solid/LocationCrosshairs')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element LocationCrosshairs
include('fontawesome-6/Solid/LocationCrosshairs')

' renders the element
LocationCrosshairs('LocationCrosshairs', 'Location Crosshairs', 'an optional tech label', 'an optional description')
@enduml
```

