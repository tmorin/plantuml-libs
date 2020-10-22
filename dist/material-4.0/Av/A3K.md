# A3 K

```text
material-4.0/Av/A3K
```

```text
include('material-4.0/Av/A3K')
```

|icon|element|
|---|---|
|![](A3K.png)|![](A3K.element.png)|



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
' loads the A3K element
include('material-4.0/Av/A3K')
A3K('a_3_k', 'A3 K', 'an optional tech field')
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
' loads the A3K element
include('material-4.0/Av/A3K')
A3K('a_3_k', 'A3 K', 'an optional tech field')
@enduml
```

