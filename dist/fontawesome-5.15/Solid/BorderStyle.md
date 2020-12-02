# Border Style

```text
fontawesome-5.15/Solid/BorderStyle
```

```text
include('fontawesome-5.15/Solid/BorderStyle')
```

|icon|element|
|---|---|
|![](BorderStyle.png)|![](BorderStyle.element.png)|



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
' loads the BorderStyle element
include('fontawesome-5.15/Solid/BorderStyle')
BorderStyle('border_style', 'Border Style', 'an optional tech field')
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
' loads the BorderStyle element
include('fontawesome-5.15/Solid/BorderStyle')
BorderStyle('border_style', 'Border Style', 'an optional tech field')
@enduml
```

