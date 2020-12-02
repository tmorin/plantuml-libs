# Border None

```text
fontawesome-5.15/Solid/BorderNone
```

```text
include('fontawesome-5.15/Solid/BorderNone')
```

|icon|element|
|---|---|
|![](BorderNone.png)|![](BorderNone.element.png)|



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
' loads the BorderNone element
include('fontawesome-5.15/Solid/BorderNone')
BorderNone('border_none', 'Border None', 'an optional tech field')
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
' loads the BorderNone element
include('fontawesome-5.15/Solid/BorderNone')
BorderNone('border_none', 'Border None', 'an optional tech field')
@enduml
```

