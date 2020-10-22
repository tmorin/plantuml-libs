# Looks3

```text
material-4.0/Image/Looks3
```

```text
include('material-4.0/Image/Looks3')
```

|icon|element|
|---|---|
|![](Looks3.png)|![](Looks3.element.png)|



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
' loads the Looks3 element
include('material-4.0/Image/Looks3')
Looks3('looks_3', 'Looks3', 'an optional tech field')
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
' loads the Looks3 element
include('material-4.0/Image/Looks3')
Looks3('looks_3', 'Looks3', 'an optional tech field')
@enduml
```

