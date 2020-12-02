# Gripfire

```text
fontawesome-5.15/Brands/Gripfire
```

```text
include('fontawesome-5.15/Brands/Gripfire')
```

|icon|element|
|---|---|
|![](Gripfire.png)|![](Gripfire.element.png)|



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
' loads the Gripfire element
include('fontawesome-5.15/Brands/Gripfire')
Gripfire('gripfire', 'Gripfire', 'an optional tech field')
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
' loads the Gripfire element
include('fontawesome-5.15/Brands/Gripfire')
Gripfire('gripfire', 'Gripfire', 'an optional tech field')
@enduml
```

