# Square Full

```text
fontawesome-5.15/Solid/SquareFull
```

```text
include('fontawesome-5.15/Solid/SquareFull')
```

|icon|element|
|---|---|
|![](SquareFull.png)|![](SquareFull.element.png)|



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
' loads the SquareFull element
include('fontawesome-5.15/Solid/SquareFull')
SquareFull('square_full', 'Square Full', 'an optional tech field')
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
' loads the SquareFull element
include('fontawesome-5.15/Solid/SquareFull')
SquareFull('square_full', 'Square Full', 'an optional tech field')
@enduml
```

