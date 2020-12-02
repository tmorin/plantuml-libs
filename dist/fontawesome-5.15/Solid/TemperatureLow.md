# Temperature Low

```text
fontawesome-5.15/Solid/TemperatureLow
```

```text
include('fontawesome-5.15/Solid/TemperatureLow')
```

|icon|element|
|---|---|
|![](TemperatureLow.png)|![](TemperatureLow.element.png)|



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
' loads the TemperatureLow element
include('fontawesome-5.15/Solid/TemperatureLow')
TemperatureLow('temperature_low', 'Temperature Low', 'an optional tech field')
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
' loads the TemperatureLow element
include('fontawesome-5.15/Solid/TemperatureLow')
TemperatureLow('temperature_low', 'Temperature Low', 'an optional tech field')
@enduml
```

