# Sports Hockey

```text
material-4.0/Social/SportsHockey
```

```text
include('material-4.0/Social/SportsHockey')
```

|icon|element|
|---|---|
|![](SportsHockey.png)|![](SportsHockey.element.png)|



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
' loads the SportsHockey element
include('material-4.0/Social/SportsHockey')
SportsHockey('sports_hockey', 'Sports Hockey', 'an optional tech field')
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
' loads the SportsHockey element
include('material-4.0/Social/SportsHockey')
SportsHockey('sports_hockey', 'Sports Hockey', 'an optional tech field')
@enduml
```

