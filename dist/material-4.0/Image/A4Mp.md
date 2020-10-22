# A4 Mp

```text
material-4.0/Image/A4Mp
```

```text
include('material-4.0/Image/A4Mp')
```

|icon|element|
|---|---|
|![](A4Mp.png)|![](A4Mp.element.png)|



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
' loads the A4Mp element
include('material-4.0/Image/A4Mp')
A4Mp('a_4_mp', 'A4 Mp', 'an optional tech field')
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
' loads the A4Mp element
include('material-4.0/Image/A4Mp')
A4Mp('a_4_mp', 'A4 Mp', 'an optional tech field')
@enduml
```

