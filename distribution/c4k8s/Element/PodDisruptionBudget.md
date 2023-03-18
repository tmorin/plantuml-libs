# PodDisruptionBudget


```text
c4k8s/Element/PodDisruptionBudget
```

```text
include('c4k8s/Element/PodDisruptionBudget')
```



| PodDisruptionBudget |
| :---: |
| ![illustration for PodDisruptionBudget](../../c4k8s/Element/PodDisruptionBudget.Local.png) |




## PodDisruptionBudget

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element PodDisruptionBudget
include('c4k8s/Element/PodDisruptionBudget')

' load the c4model package
include('c4model/bootstrap')
PodDisruptionBudget('PodDisruptionBudget', 'Pod Disruption Budget', 'an optional description label')
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

' loads the Item which embeds the element PodDisruptionBudget
include('c4k8s/Element/PodDisruptionBudget')

' load the c4model package
include('c4model/bootstrap')
PodDisruptionBudget('PodDisruptionBudget', 'Pod Disruption Budget', 'an optional description label')
@enduml
```

