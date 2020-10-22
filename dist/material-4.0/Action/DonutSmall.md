# Donut Small

```text
material-4.0/Action/DonutSmall
```

```text
include('material-4.0/Action/DonutSmall')
```

|icon|element|
|---|---|
|![](DonutSmall.png)|![](DonutSmall.element.png)|



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
' loads the DonutSmall element
include('material-4.0/Action/DonutSmall')
DonutSmall('donut_small', 'Donut Small', 'an optional tech field')
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
' loads the DonutSmall element
include('material-4.0/Action/DonutSmall')
DonutSmall('donut_small', 'Donut Small', 'an optional tech field')
@enduml
```

