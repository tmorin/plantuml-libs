# ResourceFieldSelector


```text
c4k8s/Element/ResourceFieldSelector
```

```text
include('c4k8s/Element/ResourceFieldSelector')
```



| ResourceFieldSelector |
| :---: |
| ![illustration for ResourceFieldSelector](../../c4k8s/Element/ResourceFieldSelector.Local.png) |




## ResourceFieldSelector

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element ResourceFieldSelector
include('c4k8s/Element/ResourceFieldSelector')

' load the c4model package
include('c4model/bootstrap')
ResourceFieldSelector('ResourceFieldSelector', 'Resource Field Selector', 'an optional description label')
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

' loads the Item which embeds the element ResourceFieldSelector
include('c4k8s/Element/ResourceFieldSelector')

' load the c4model package
include('c4model/bootstrap')
ResourceFieldSelector('ResourceFieldSelector', 'Resource Field Selector', 'an optional description label')
@enduml
```

