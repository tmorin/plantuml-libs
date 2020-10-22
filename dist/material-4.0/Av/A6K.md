# A6 K

```text
material-4.0/Av/A6K
```

```text
include('material-4.0/Av/A6K')
```

|icon|element|
|---|---|
|![](A6K.png)|![](A6K.element.png)|



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
' loads the A6K element
include('material-4.0/Av/A6K')
A6K('a_6_k', 'A6 K', 'an optional tech field')
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
' loads the A6K element
include('material-4.0/Av/A6K')
A6K('a_6_k', 'A6 K', 'an optional tech field')
@enduml
```

