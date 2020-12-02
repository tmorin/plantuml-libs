# Cloud Sun Rain

```text
fontawesome-5.15/Solid/CloudSunRain
```

```text
include('fontawesome-5.15/Solid/CloudSunRain')
```

|icon|element|
|---|---|
|![](CloudSunRain.png)|![](CloudSunRain.element.png)|



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
' loads the CloudSunRain element
include('fontawesome-5.15/Solid/CloudSunRain')
CloudSunRain('cloud_sun_rain', 'Cloud Sun Rain', 'an optional tech field')
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
' loads the CloudSunRain element
include('fontawesome-5.15/Solid/CloudSunRain')
CloudSunRain('cloud_sun_rain', 'Cloud Sun Rain', 'an optional tech field')
@enduml
```

