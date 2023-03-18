# LimitRange


```text
c4k8s/Element/LimitRange
```

```text
include('c4k8s/Element/LimitRange')
```



| LimitRange |
| :---: |
| ![illustration for LimitRange](../../c4k8s/Element/LimitRange.Local.png) |




## LimitRange

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element LimitRange
include('c4k8s/Element/LimitRange')

' load the c4model package
include('c4model/bootstrap')
LimitRange('LimitRange', 'Limit Range', 'an optional description label')
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

' loads the Item which embeds the element LimitRange
include('c4k8s/Element/LimitRange')

' load the c4model package
include('c4model/bootstrap')
LimitRange('LimitRange', 'Limit Range', 'an optional description label')
@enduml
```

