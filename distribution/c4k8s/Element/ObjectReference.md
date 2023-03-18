# ObjectReference


```text
c4k8s/Element/ObjectReference
```

```text
include('c4k8s/Element/ObjectReference')
```



| ObjectReference |
| :---: |
| ![illustration for ObjectReference](../../c4k8s/Element/ObjectReference.Local.png) |




## ObjectReference

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element ObjectReference
include('c4k8s/Element/ObjectReference')

' load the c4model package
include('c4model/bootstrap')
ObjectReference('ObjectReference', 'Object Reference', 'an optional description label')
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

' loads the Item which embeds the element ObjectReference
include('c4k8s/Element/ObjectReference')

' load the c4model package
include('c4model/bootstrap')
ObjectReference('ObjectReference', 'Object Reference', 'an optional description label')
@enduml
```

