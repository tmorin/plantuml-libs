# EndpointSlice


```text
c4k8s/Element/EndpointSlice
```

```text
include('c4k8s/Element/EndpointSlice')
```



| EndpointSlice |
| :---: |
| ![illustration for EndpointSlice](../../c4k8s/Element/EndpointSlice.Local.png) |




## EndpointSlice

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element EndpointSlice
include('c4k8s/Element/EndpointSlice')

' load the c4model package
include('c4model/bootstrap')
EndpointSlice('EndpointSlice', 'Endpoint Slice', 'an optional description label')
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

' loads the Item which embeds the element EndpointSlice
include('c4k8s/Element/EndpointSlice')

' load the c4model package
include('c4model/bootstrap')
EndpointSlice('EndpointSlice', 'Endpoint Slice', 'an optional description label')
@enduml
```

