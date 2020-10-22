# A5 K

```text
material-4.0/Av/A5K
```

```text
include('material-4.0/Av/A5K')
```

|icon|element|
|---|---|
|![](A5K.png)|![](A5K.element.png)|



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
' loads the A5K element
include('material-4.0/Av/A5K')
A5K('a_5_k', 'A5 K', 'an optional tech field')
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
' loads the A5K element
include('material-4.0/Av/A5K')
A5K('a_5_k', 'A5 K', 'an optional tech field')
@enduml
```

