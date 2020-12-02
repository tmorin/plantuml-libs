# Star Of Life

```text
fontawesome-5.15/Solid/StarOfLife
```

```text
include('fontawesome-5.15/Solid/StarOfLife')
```

|icon|element|
|---|---|
|![](StarOfLife.png)|![](StarOfLife.element.png)|



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
' loads the StarOfLife element
include('fontawesome-5.15/Solid/StarOfLife')
StarOfLife('star_of_life', 'Star Of Life', 'an optional tech field')
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
' loads the StarOfLife element
include('fontawesome-5.15/Solid/StarOfLife')
StarOfLife('star_of_life', 'Star Of Life', 'an optional tech field')
@enduml
```

