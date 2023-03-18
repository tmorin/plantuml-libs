# HorizontalPodAutoscaler


```text
c4k8s/Element/HorizontalPodAutoscaler
```

```text
include('c4k8s/Element/HorizontalPodAutoscaler')
```



| HorizontalPodAutoscaler |
| :---: |
| ![illustration for HorizontalPodAutoscaler](../../c4k8s/Element/HorizontalPodAutoscaler.Local.png) |




## HorizontalPodAutoscaler

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element HorizontalPodAutoscaler
include('c4k8s/Element/HorizontalPodAutoscaler')

' load the c4model package
include('c4model/bootstrap')
HorizontalPodAutoscaler('HorizontalPodAutoscaler', 'Horizontal Pod Autoscaler', 'an optional description label')
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

' loads the Item which embeds the element HorizontalPodAutoscaler
include('c4k8s/Element/HorizontalPodAutoscaler')

' load the c4model package
include('c4model/bootstrap')
HorizontalPodAutoscaler('HorizontalPodAutoscaler', 'Horizontal Pod Autoscaler', 'an optional description label')
@enduml
```

