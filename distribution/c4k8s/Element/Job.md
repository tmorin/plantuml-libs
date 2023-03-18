# Job


```text
c4k8s/Element/Job
```

```text
include('c4k8s/Element/Job')
```



| Job |
| :---: |
| ![illustration for Job](../../c4k8s/Element/Job.Local.png) |




## Job

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element Job
include('c4k8s/Element/Job')

' load the c4model package
include('c4model/bootstrap')
Job('Job', 'Job', 'an optional description label')
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

' loads the Item which embeds the element Job
include('c4k8s/Element/Job')

' load the c4model package
include('c4model/bootstrap')
Job('Job', 'Job', 'an optional description label')
@enduml
```

