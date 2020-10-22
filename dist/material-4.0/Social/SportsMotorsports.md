# Sports Motorsports

```text
material-4.0/Social/SportsMotorsports
```

```text
include('material-4.0/Social/SportsMotorsports')
```

|icon|element|
|---|---|
|![](SportsMotorsports.png)|![](SportsMotorsports.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the SportsMotorsports element
include('material-4.0/Social/SportsMotorsports')
SportsMotorsports('sports_motorsports', 'Sports Motorsports', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the SportsMotorsports element
include('material-4.0/Social/SportsMotorsports')
SportsMotorsports('sports_motorsports', 'Sports Motorsports', 'an optional tech field')
@enduml
```

