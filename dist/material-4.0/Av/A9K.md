# A9 K

```text
material-4.0/Av/A9K
```

```text
include('material-4.0/Av/A9K')
```

|icon|element|
|---|---|
|![](A9K.png)|![](A9K.element.png)|



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
' loads the A9K element
include('material-4.0/Av/A9K')
A9K('a_9_k', 'A9 K', 'an optional tech field')
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
' loads the A9K element
include('material-4.0/Av/A9K')
A9K('a_9_k', 'A9 K', 'an optional tech field')
@enduml
```

