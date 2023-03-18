# NetworkPolicy


```text
c4k8s/Element/NetworkPolicy
```

```text
include('c4k8s/Element/NetworkPolicy')
```



| NetworkPolicy |
| :---: |
| ![illustration for NetworkPolicy](../../c4k8s/Element/NetworkPolicy.Local.png) |




## NetworkPolicy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element NetworkPolicy
include('c4k8s/Element/NetworkPolicy')

' load the c4model package
include('c4model/bootstrap')
NetworkPolicy('NetworkPolicy', 'Network Policy', 'an optional description label')
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

' loads the Item which embeds the element NetworkPolicy
include('c4k8s/Element/NetworkPolicy')

' load the c4model package
include('c4model/bootstrap')
NetworkPolicy('NetworkPolicy', 'Network Policy', 'an optional description label')
@enduml
```

