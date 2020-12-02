# Watchman Monitoring

```text
fontawesome-5.15/Brands/WatchmanMonitoring
```

```text
include('fontawesome-5.15/Brands/WatchmanMonitoring')
```

|icon|element|
|---|---|
|![](WatchmanMonitoring.png)|![](WatchmanMonitoring.element.png)|



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
' loads the WatchmanMonitoring element
include('fontawesome-5.15/Brands/WatchmanMonitoring')
WatchmanMonitoring('watchman_monitoring', 'Watchman Monitoring', 'an optional tech field')
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
' loads the WatchmanMonitoring element
include('fontawesome-5.15/Brands/WatchmanMonitoring')
WatchmanMonitoring('watchman_monitoring', 'Watchman Monitoring', 'an optional tech field')
@enduml
```

