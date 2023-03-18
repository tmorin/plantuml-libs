# DaemonSet


```text
c4k8s/Element/DaemonSet
```

```text
include('c4k8s/Element/DaemonSet')
```



| DaemonSet |
| :---: |
| ![illustration for DaemonSet](../../c4k8s/Element/DaemonSet.Local.png) |




## DaemonSet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element DaemonSet
include('c4k8s/Element/DaemonSet')

' load the c4model package
include('c4model/bootstrap')
DaemonSet('DaemonSet', 'Daemon Set', 'an optional description label')
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

' loads the Item which embeds the element DaemonSet
include('c4k8s/Element/DaemonSet')

' load the c4model package
include('c4model/bootstrap')
DaemonSet('DaemonSet', 'Daemon Set', 'an optional description label')
@enduml
```

