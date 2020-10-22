# Do Not Step

```text
material-4.0/Places/DoNotStep
```

```text
include('material-4.0/Places/DoNotStep')
```

|icon|element|
|---|---|
|![](DoNotStep.png)|![](DoNotStep.element.png)|



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
' loads the DoNotStep element
include('material-4.0/Places/DoNotStep')
DoNotStep('do_not_step', 'Do Not Step', 'an optional tech field')
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
' loads the DoNotStep element
include('material-4.0/Places/DoNotStep')
DoNotStep('do_not_step', 'Do Not Step', 'an optional tech field')
@enduml
```

