# Looks5

```text
material-4.0/Image/Looks5
```

```text
include('material-4.0/Image/Looks5')
```

|icon|element|
|---|---|
|![](Looks5.png)|![](Looks5.element.png)|



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
' loads the Looks5 element
include('material-4.0/Image/Looks5')
Looks5('looks_5', 'Looks5', 'an optional tech field')
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
' loads the Looks5 element
include('material-4.0/Image/Looks5')
Looks5('looks_5', 'Looks5', 'an optional tech field')
@enduml
```

