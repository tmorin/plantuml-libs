# Css3 Alt

```text
fontawesome-5.15/Brands/Css3Alt
```

```text
include('fontawesome-5.15/Brands/Css3Alt')
```

|icon|element|
|---|---|
|![](Css3Alt.png)|![](Css3Alt.element.png)|



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
' loads the Css3Alt element
include('fontawesome-5.15/Brands/Css3Alt')
Css3Alt('css_3_alt', 'Css3 Alt', 'an optional tech field')
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
' loads the Css3Alt element
include('fontawesome-5.15/Brands/Css3Alt')
Css3Alt('css_3_alt', 'Css3 Alt', 'an optional tech field')
@enduml
```

