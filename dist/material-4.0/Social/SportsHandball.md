# Sports Handball

```text
material-4.0/Social/SportsHandball
```

```text
include('material-4.0/Social/SportsHandball')
```

|icon|element|
|---|---|
|![](SportsHandball.png)|![](SportsHandball.element.png)|



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
' loads the SportsHandball element
include('material-4.0/Social/SportsHandball')
SportsHandball('sports_handball', 'Sports Handball', 'an optional tech field')
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
' loads the SportsHandball element
include('material-4.0/Social/SportsHandball')
SportsHandball('sports_handball', 'Sports Handball', 'an optional tech field')
@enduml
```

