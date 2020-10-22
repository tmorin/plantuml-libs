# Looks4

```text
material-4.0/Image/Looks4
```

```text
include('material-4.0/Image/Looks4')
```

|icon|element|
|---|---|
|![](Looks4.png)|![](Looks4.element.png)|



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
' loads the Looks4 element
include('material-4.0/Image/Looks4')
Looks4('looks_4', 'Looks4', 'an optional tech field')
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
' loads the Looks4 element
include('material-4.0/Image/Looks4')
Looks4('looks_4', 'Looks4', 'an optional tech field')
@enduml
```

