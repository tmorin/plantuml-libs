# CronJobBoundary


```text
c4k8s/Boundary/CronJobBoundary
```

```text
include('c4k8s/Boundary/CronJobBoundary')
```



| CronJobBoundary |
| :---: |
| ![illustration for CronJobBoundary](../../c4k8s/Boundary/CronJobBoundary.Local.png) |




## CronJobBoundary

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element CronJobBoundary
include('c4k8s/Boundary/CronJobBoundary')

' load the c4model package
include('c4model/bootstrap')
CronJobBoundary('CronJobBoundary', 'Cron Job Boundary') {
  note as note
  the content of the boundary
  end note
}
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
include('c4k8s/bootstrap')

' loads the Item which embeds the element CronJobBoundary
include('c4k8s/Boundary/CronJobBoundary')

' load the c4model package
include('c4model/bootstrap')
CronJobBoundary('CronJobBoundary', 'Cron Job Boundary') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

