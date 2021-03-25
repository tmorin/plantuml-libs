# Cycling74

```text
simpleicons-4/C/Cycling74
```

```text
include('simpleicons-4/C/Cycling74')
```

|icon|element|
|---|---|
|![](Cycling74.png)|![](Cycling74.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the simpleicons-4 bootstrap
include('simpleicons-4/bootstrap')
' loads the Cycling74 element
include('simpleicons-4/C/Cycling74')
Cycling74('cycling_74', 'Cycling74', 'an optional tech field')
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
' loads the simpleicons-4 bootstrap
include('simpleicons-4/bootstrap')
' loads the Cycling74 element
include('simpleicons-4/C/Cycling74')
Cycling74('cycling_74', 'Cycling74', 'an optional tech field')
@enduml
```

