# RoleBinding


```text
c4k8s/Element/RoleBinding
```

```text
include('c4k8s/Element/RoleBinding')
```



| RoleBinding |
| :---: |
| ![illustration for RoleBinding](../../c4k8s/Element/RoleBinding.Local.png) |




## RoleBinding

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element RoleBinding
include('c4k8s/Element/RoleBinding')

' load the c4model package
include('c4model/bootstrap')
RoleBinding('RoleBinding', 'Role Binding', 'an optional description label')
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

' loads the Item which embeds the element RoleBinding
include('c4k8s/Element/RoleBinding')

' load the c4model package
include('c4model/bootstrap')
RoleBinding('RoleBinding', 'Role Binding', 'an optional description label')
@enduml
```

