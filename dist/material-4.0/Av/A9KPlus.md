# A9 K Plus

```text
material-4.0/Av/A9KPlus
```

```text
include('material-4.0/Av/A9KPlus')
```

|icon|element|
|---|---|
|![](A9KPlus.png)|![](A9KPlus.element.png)|



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
' loads the A9KPlus element
include('material-4.0/Av/A9KPlus')
A9KPlus('a_9_k_plus', 'A9 K Plus', 'an optional tech field')
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
' loads the A9KPlus element
include('material-4.0/Av/A9KPlus')
A9KPlus('a_9_k_plus', 'A9 K Plus', 'an optional tech field')
@enduml
```

