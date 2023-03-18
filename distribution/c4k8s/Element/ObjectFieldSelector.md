# ObjectFieldSelector


```text
c4k8s/Element/ObjectFieldSelector
```

```text
include('c4k8s/Element/ObjectFieldSelector')
```



| ObjectFieldSelector |
| :---: |
| ![illustration for ObjectFieldSelector](../../c4k8s/Element/ObjectFieldSelector.Local.png) |




## ObjectFieldSelector

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element ObjectFieldSelector
include('c4k8s/Element/ObjectFieldSelector')

' load the c4model package
include('c4model/bootstrap')
ObjectFieldSelector('ObjectFieldSelector', 'Object Field Selector', 'an optional description label')
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

' loads the Item which embeds the element ObjectFieldSelector
include('c4k8s/Element/ObjectFieldSelector')

' load the c4model package
include('c4model/bootstrap')
ObjectFieldSelector('ObjectFieldSelector', 'Object Field Selector', 'an optional description label')
@enduml
```

