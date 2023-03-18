# LocalObjectReference


```text
c4k8s/Element/LocalObjectReference
```

```text
include('c4k8s/Element/LocalObjectReference')
```



| LocalObjectReference |
| :---: |
| ![illustration for LocalObjectReference](../../c4k8s/Element/LocalObjectReference.Local.png) |




## LocalObjectReference

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element LocalObjectReference
include('c4k8s/Element/LocalObjectReference')

' load the c4model package
include('c4model/bootstrap')
LocalObjectReference('LocalObjectReference', 'Local Object Reference', 'an optional description label')
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

' loads the Item which embeds the element LocalObjectReference
include('c4k8s/Element/LocalObjectReference')

' load the c4model package
include('c4model/bootstrap')
LocalObjectReference('LocalObjectReference', 'Local Object Reference', 'an optional description label')
@enduml
```

