# Css3

```text
simpleicons-4/C/Css3
```

```text
include('simpleicons-4/C/Css3')
```

|icon|element|
|---|---|
|![](Css3.png)|![](Css3.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the simpleicons-4 bootstrap
include('simpleicons-4/bootstrap')
' loads the Css3 element
include('simpleicons-4/C/Css3')
Css3('css_3', 'Css3', 'an optional tech field')
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
' loads the simpleicons-4 bootstrap
include('simpleicons-4/bootstrap')
' loads the Css3 element
include('simpleicons-4/C/Css3')
Css3('css_3', 'Css3', 'an optional tech field')
@enduml
```
