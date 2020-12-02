# Angular

```text
fontawesome-5.15/Brands/Angular
```

```text
include('fontawesome-5.15/Brands/Angular')
```

|icon|element|
|---|---|
|![](Angular.png)|![](Angular.element.png)|



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
' loads the Angular element
include('fontawesome-5.15/Brands/Angular')
Angular('angular', 'Angular', 'an optional tech field')
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
' loads the Angular element
include('fontawesome-5.15/Brands/Angular')
Angular('angular', 'Angular', 'an optional tech field')
@enduml
```

