# Arrow Drop Up

```text
material-4.0/Navigation/ArrowDropUp
```

```text
include('material-4.0/Navigation/ArrowDropUp')
```

|icon|element|
|---|---|
|![](ArrowDropUp.png)|![](ArrowDropUp.element.png)|



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
' loads the ArrowDropUp element
include('material-4.0/Navigation/ArrowDropUp')
ArrowDropUp('arrow_drop_up', 'Arrow Drop Up', 'an optional tech field')
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
' loads the ArrowDropUp element
include('material-4.0/Navigation/ArrowDropUp')
ArrowDropUp('arrow_drop_up', 'Arrow Drop Up', 'an optional tech field')
@enduml
```

