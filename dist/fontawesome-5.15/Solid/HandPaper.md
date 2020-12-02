# Hand Paper

```text
fontawesome-5.15/Solid/HandPaper
```

```text
include('fontawesome-5.15/Solid/HandPaper')
```

|icon|element|
|---|---|
|![](HandPaper.png)|![](HandPaper.element.png)|



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
' loads the HandPaper element
include('fontawesome-5.15/Solid/HandPaper')
HandPaper('hand_paper', 'Hand Paper', 'an optional tech field')
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
' loads the HandPaper element
include('fontawesome-5.15/Solid/HandPaper')
HandPaper('hand_paper', 'Hand Paper', 'an optional tech field')
@enduml
```
