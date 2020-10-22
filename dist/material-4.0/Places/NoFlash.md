# No Flash

```text
material-4.0/Places/NoFlash
```

```text
include('material-4.0/Places/NoFlash')
```

|icon|element|
|---|---|
|![](NoFlash.png)|![](NoFlash.element.png)|



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
' loads the NoFlash element
include('material-4.0/Places/NoFlash')
NoFlash('no_flash', 'No Flash', 'an optional tech field')
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
' loads the NoFlash element
include('material-4.0/Places/NoFlash')
NoFlash('no_flash', 'No Flash', 'an optional tech field')
@enduml
```

