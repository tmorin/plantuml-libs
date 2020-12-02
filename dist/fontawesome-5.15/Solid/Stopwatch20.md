# Stopwatch20

```text
fontawesome-5.15/Solid/Stopwatch20
```

```text
include('fontawesome-5.15/Solid/Stopwatch20')
```

|icon|element|
|---|---|
|![](Stopwatch20.png)|![](Stopwatch20.element.png)|



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
' loads the Stopwatch20 element
include('fontawesome-5.15/Solid/Stopwatch20')
Stopwatch20('stopwatch_20', 'Stopwatch20', 'an optional tech field')
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
' loads the Stopwatch20 element
include('fontawesome-5.15/Solid/Stopwatch20')
Stopwatch20('stopwatch_20', 'Stopwatch20', 'an optional tech field')
@enduml
```

