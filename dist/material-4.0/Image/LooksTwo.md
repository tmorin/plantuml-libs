# Looks Two

```text
material-4.0/Image/LooksTwo
```

```text
include('material-4.0/Image/LooksTwo')
```

|icon|element|
|---|---|
|![](LooksTwo.png)|![](LooksTwo.element.png)|



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
' loads the LooksTwo element
include('material-4.0/Image/LooksTwo')
LooksTwo('looks_two', 'Looks Two', 'an optional tech field')
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
' loads the LooksTwo element
include('material-4.0/Image/LooksTwo')
LooksTwo('looks_two', 'Looks Two', 'an optional tech field')
@enduml
```

