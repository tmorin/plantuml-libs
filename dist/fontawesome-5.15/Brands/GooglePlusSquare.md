# Google Plus Square

```text
fontawesome-5.15/Brands/GooglePlusSquare
```

```text
include('fontawesome-5.15/Brands/GooglePlusSquare')
```

|icon|element|
|---|---|
|![](GooglePlusSquare.png)|![](GooglePlusSquare.element.png)|



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
' loads the GooglePlusSquare element
include('fontawesome-5.15/Brands/GooglePlusSquare')
GooglePlusSquare('google_plus_square', 'Google Plus Square', 'an optional tech field')
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
' loads the GooglePlusSquare element
include('fontawesome-5.15/Brands/GooglePlusSquare')
GooglePlusSquare('google_plus_square', 'Google Plus Square', 'an optional tech field')
@enduml
```

