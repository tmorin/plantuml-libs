# A7 K Plus

```text
material-4.0/Av/A7KPlus
```

```text
include('material-4.0/Av/A7KPlus')
```

|icon|element|
|---|---|
|![](A7KPlus.png)|![](A7KPlus.element.png)|



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
' loads the A7KPlus element
include('material-4.0/Av/A7KPlus')
A7KPlus('a_7_k_plus', 'A7 K Plus', 'an optional tech field')
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
' loads the A7KPlus element
include('material-4.0/Av/A7KPlus')
A7KPlus('a_7_k_plus', 'A7 K Plus', 'an optional tech field')
@enduml
```

