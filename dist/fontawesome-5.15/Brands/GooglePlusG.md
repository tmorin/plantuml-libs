# Google Plus G

```text
fontawesome-5.15/Brands/GooglePlusG
```

```text
include('fontawesome-5.15/Brands/GooglePlusG')
```

|icon|element|
|---|---|
|![](GooglePlusG.png)|![](GooglePlusG.element.png)|



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
' loads the GooglePlusG element
include('fontawesome-5.15/Brands/GooglePlusG')
GooglePlusG('google_plus_g', 'Google Plus G', 'an optional tech field')
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
' loads the GooglePlusG element
include('fontawesome-5.15/Brands/GooglePlusG')
GooglePlusG('google_plus_g', 'Google Plus G', 'an optional tech field')
@enduml
```

