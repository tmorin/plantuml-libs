# Exclamation Triangle

```text
fontawesome-5.15/Solid/ExclamationTriangle
```

```text
include('fontawesome-5.15/Solid/ExclamationTriangle')
```

|icon|element|
|---|---|
|![](ExclamationTriangle.png)|![](ExclamationTriangle.element.png)|



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
' loads the ExclamationTriangle element
include('fontawesome-5.15/Solid/ExclamationTriangle')
ExclamationTriangle('exclamation_triangle', 'Exclamation Triangle', 'an optional tech field')
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
' loads the ExclamationTriangle element
include('fontawesome-5.15/Solid/ExclamationTriangle')
ExclamationTriangle('exclamation_triangle', 'Exclamation Triangle', 'an optional tech field')
@enduml
```

