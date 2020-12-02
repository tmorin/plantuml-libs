# Google Play

```text
fontawesome-5.15/Brands/GooglePlay
```

```text
include('fontawesome-5.15/Brands/GooglePlay')
```

|icon|element|
|---|---|
|![](GooglePlay.png)|![](GooglePlay.element.png)|



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
' loads the GooglePlay element
include('fontawesome-5.15/Brands/GooglePlay')
GooglePlay('google_play', 'Google Play', 'an optional tech field')
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
' loads the GooglePlay element
include('fontawesome-5.15/Brands/GooglePlay')
GooglePlay('google_play', 'Google Play', 'an optional tech field')
@enduml
```

