# A8 K

```text
material-4.0/Av/A8K
```

```text
include('material-4.0/Av/A8K')
```

|icon|element|
|---|---|
|![](A8K.png)|![](A8K.element.png)|



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
' loads the A8K element
include('material-4.0/Av/A8K')
A8K('a_8_k', 'A8 K', 'an optional tech field')
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
' loads the A8K element
include('material-4.0/Av/A8K')
A8K('a_8_k', 'A8 K', 'an optional tech field')
@enduml
```

