# Repeat One On

```text
material-4.0/Av/RepeatOneOn
```

```text
include('material-4.0/Av/RepeatOneOn')
```

|icon|element|
|---|---|
|![](RepeatOneOn.png)|![](RepeatOneOn.element.png)|



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
' loads the RepeatOneOn element
include('material-4.0/Av/RepeatOneOn')
RepeatOneOn('repeat_one_on', 'Repeat One On', 'an optional tech field')
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
' loads the RepeatOneOn element
include('material-4.0/Av/RepeatOneOn')
RepeatOneOn('repeat_one_on', 'Repeat One On', 'an optional tech field')
@enduml
```

