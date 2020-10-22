# Surround Sound

```text
material-4.0/Av/SurroundSound
```

```text
include('material-4.0/Av/SurroundSound')
```

|icon|element|
|---|---|
|![](SurroundSound.png)|![](SurroundSound.element.png)|



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
' loads the SurroundSound element
include('material-4.0/Av/SurroundSound')
SurroundSound('surround_sound', 'Surround Sound', 'an optional tech field')
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
' loads the SurroundSound element
include('material-4.0/Av/SurroundSound')
SurroundSound('surround_sound', 'Surround Sound', 'an optional tech field')
@enduml
```

