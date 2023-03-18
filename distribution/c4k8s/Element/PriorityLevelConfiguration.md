# PriorityLevelConfiguration


```text
c4k8s/Element/PriorityLevelConfiguration
```

```text
include('c4k8s/Element/PriorityLevelConfiguration')
```



| PriorityLevelConfiguration |
| :---: |
| ![illustration for PriorityLevelConfiguration](../../c4k8s/Element/PriorityLevelConfiguration.Local.png) |




## PriorityLevelConfiguration

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element PriorityLevelConfiguration
include('c4k8s/Element/PriorityLevelConfiguration')

' load the c4model package
include('c4model/bootstrap')
PriorityLevelConfiguration('PriorityLevelConfiguration', 'Priority Level Configuration', 'an optional description label')
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

' loads the Item which embeds the element PriorityLevelConfiguration
include('c4k8s/Element/PriorityLevelConfiguration')

' load the c4model package
include('c4model/bootstrap')
PriorityLevelConfiguration('PriorityLevelConfiguration', 'Priority Level Configuration', 'an optional description label')
@enduml
```

