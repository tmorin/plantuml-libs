# A2 K Plus

```text
material-4.0/Av/A2KPlus
```

```text
include('material-4.0/Av/A2KPlus')
```

|icon|element|
|---|---|
|![](A2KPlus.png)|![](A2KPlus.element.png)|



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
' loads the A2KPlus element
include('material-4.0/Av/A2KPlus')
A2KPlus('a_2_k_plus', 'A2 K Plus', 'an optional tech field')
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
' loads the A2KPlus element
include('material-4.0/Av/A2KPlus')
A2KPlus('a_2_k_plus', 'A2 K Plus', 'an optional tech field')
@enduml
```

