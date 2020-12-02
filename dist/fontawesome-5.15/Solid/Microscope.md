# Microscope

```text
fontawesome-5.15/Solid/Microscope
```

```text
include('fontawesome-5.15/Solid/Microscope')
```

|icon|element|
|---|---|
|![](Microscope.png)|![](Microscope.element.png)|



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
' loads the Microscope element
include('fontawesome-5.15/Solid/Microscope')
Microscope('microscope', 'Microscope', 'an optional tech field')
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
' loads the Microscope element
include('fontawesome-5.15/Solid/Microscope')
Microscope('microscope', 'Microscope', 'an optional tech field')
@enduml
```

