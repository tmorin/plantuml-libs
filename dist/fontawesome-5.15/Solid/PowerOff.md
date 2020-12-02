# Power Off

```text
fontawesome-5.15/Solid/PowerOff
```

```text
include('fontawesome-5.15/Solid/PowerOff')
```

|icon|element|
|---|---|
|![](PowerOff.png)|![](PowerOff.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the fontawesome-5.15 bootstrap
include('fontawesome-5.15/bootstrap')
' loads the PowerOff element
include('fontawesome-5.15/Solid/PowerOff')
PowerOff('power_off', 'Power Off', 'an optional tech field')
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
' loads the fontawesome-5.15 bootstrap
include('fontawesome-5.15/bootstrap')
' loads the PowerOff element
include('fontawesome-5.15/Solid/PowerOff')
PowerOff('power_off', 'Power Off', 'an optional tech field')
@enduml
```

