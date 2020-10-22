# A6 K Plus

```text
material-4.0/Av/A6KPlus
```

```text
include('material-4.0/Av/A6KPlus')
```

|icon|element|
|---|---|
|![](A6KPlus.png)|![](A6KPlus.element.png)|



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
' loads the A6KPlus element
include('material-4.0/Av/A6KPlus')
A6KPlus('a_6_k_plus', 'A6 K Plus', 'an optional tech field')
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
' loads the A6KPlus element
include('material-4.0/Av/A6KPlus')
A6KPlus('a_6_k_plus', 'A6 K Plus', 'an optional tech field')
@enduml
```

