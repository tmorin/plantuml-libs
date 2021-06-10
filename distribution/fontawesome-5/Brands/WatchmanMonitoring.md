# WatchmanMonitoring


```text
fontawesome-5/Brands/WatchmanMonitoring
```

```text
include('fontawesome-5/Brands/WatchmanMonitoring')
```



| Illustration | WatchmanMonitoring |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/WatchmanMonitoring.png) | ![illustration for WatchmanMonitoring](../../fontawesome-5/Brands/WatchmanMonitoring.Local.png) |




## WatchmanMonitoring

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element WatchmanMonitoring
include('fontawesome-5/Brands/WatchmanMonitoring')

' renders the element
WatchmanMonitoring('WatchmanMonitoring', 'Watchman Monitoring', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element WatchmanMonitoring
include('fontawesome-5/Brands/WatchmanMonitoring')

' renders the element
WatchmanMonitoring('WatchmanMonitoring', 'Watchman Monitoring', 'an optional tech label')
@enduml
```

