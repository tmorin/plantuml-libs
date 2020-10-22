# Phonelink

```text
material-4.0/Hardware/Phonelink
```

```text
include('material-4.0/Hardware/Phonelink')
```

|icon|element|
|---|---|
|![](Phonelink.png)|![](Phonelink.element.png)|



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
' loads the Phonelink element
include('material-4.0/Hardware/Phonelink')
Phonelink('phonelink', 'Phonelink', 'an optional tech field')
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
' loads the Phonelink element
include('material-4.0/Hardware/Phonelink')
Phonelink('phonelink', 'Phonelink', 'an optional tech field')
@enduml
```

