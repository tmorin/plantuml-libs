# Sports Golf

```text
material-4.0/Social/SportsGolf
```

```text
include('material-4.0/Social/SportsGolf')
```

|icon|element|
|---|---|
|![](SportsGolf.png)|![](SportsGolf.element.png)|



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
' loads the SportsGolf element
include('material-4.0/Social/SportsGolf')
SportsGolf('sports_golf', 'Sports Golf', 'an optional tech field')
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
' loads the SportsGolf element
include('material-4.0/Social/SportsGolf')
SportsGolf('sports_golf', 'Sports Golf', 'an optional tech field')
@enduml
```

