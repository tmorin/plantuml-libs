# Star And Crescent

```text
fontawesome-5.15/Solid/StarAndCrescent
```

```text
include('fontawesome-5.15/Solid/StarAndCrescent')
```

|icon|element|
|---|---|
|![](StarAndCrescent.png)|![](StarAndCrescent.element.png)|



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
' loads the StarAndCrescent element
include('fontawesome-5.15/Solid/StarAndCrescent')
StarAndCrescent('star_and_crescent', 'Star And Crescent', 'an optional tech field')
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
' loads the StarAndCrescent element
include('fontawesome-5.15/Solid/StarAndCrescent')
StarAndCrescent('star_and_crescent', 'Star And Crescent', 'an optional tech field')
@enduml
```

