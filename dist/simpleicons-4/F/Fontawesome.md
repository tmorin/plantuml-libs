# Fontawesome

```text
simpleicons-4/F/Fontawesome
```

```text
include('simpleicons-4/F/Fontawesome')
```

|icon|element|
|---|---|
|![](Fontawesome.png)|![](Fontawesome.element.png)|



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
' loads the Fontawesome element
include('simpleicons-4/F/Fontawesome')
Fontawesome('fontawesome', 'Fontawesome', 'an optional tech field')
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
' loads the Fontawesome element
include('simpleicons-4/F/Fontawesome')
Fontawesome('fontawesome', 'Fontawesome', 'an optional tech field')
@enduml
```
