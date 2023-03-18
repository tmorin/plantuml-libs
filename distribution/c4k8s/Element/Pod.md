# Pod


```text
c4k8s/Element/Pod
```

```text
include('c4k8s/Element/Pod')
```



| Pod |
| :---: |
| ![illustration for Pod](../../c4k8s/Element/Pod.Local.png) |




## Pod

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element Pod
include('c4k8s/Element/Pod')

' load the c4model package
include('c4model/bootstrap')
Pod('Pod', 'Pod', 'an optional description label')
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

' loads the Item which embeds the element Pod
include('c4k8s/Element/Pod')

' load the c4model package
include('c4model/bootstrap')
Pod('Pod', 'Pod', 'an optional description label')
@enduml
```

