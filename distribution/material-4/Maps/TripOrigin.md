# TripOrigin


```text
material-4/Maps/TripOrigin
```

```text
include('material-4/Maps/TripOrigin')
```



| Illustration | TripOrigin |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/TripOrigin.png) | ![illustration for TripOrigin](../../material-4/Maps/TripOrigin.Local.png) |




## TripOrigin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element TripOrigin
include('material-4/Maps/TripOrigin')

' renders the element
TripOrigin('TripOrigin', 'Trip Origin', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element TripOrigin
include('material-4/Maps/TripOrigin')

' renders the element
TripOrigin('TripOrigin', 'Trip Origin', 'an optional tech label')
@enduml
```

