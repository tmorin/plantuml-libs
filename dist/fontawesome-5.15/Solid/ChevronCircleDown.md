# Chevron Circle Down

```text
fontawesome-5.15/Solid/ChevronCircleDown
```

```text
include('fontawesome-5.15/Solid/ChevronCircleDown')
```

|icon|element|
|---|---|
|![](ChevronCircleDown.png)|![](ChevronCircleDown.element.png)|



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
' loads the ChevronCircleDown element
include('fontawesome-5.15/Solid/ChevronCircleDown')
ChevronCircleDown('chevron_circle_down', 'Chevron Circle Down', 'an optional tech field')
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
' loads the ChevronCircleDown element
include('fontawesome-5.15/Solid/ChevronCircleDown')
ChevronCircleDown('chevron_circle_down', 'Chevron Circle Down', 'an optional tech field')
@enduml
```

