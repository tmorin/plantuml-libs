# Cloud Load Balancing

```text
gcp/Item/Networking/CloudLoadBalancing
```

```text
include('gcp/Item/Networking/CloudLoadBalancing')
```

|icon|card|element|group|
|---|---|---|---|
|![](CloudLoadBalancing.png)|![](CloudLoadBalancing.card.png)|![](CloudLoadBalancing.element.png)|![](CloudLoadBalancing.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the CloudLoadBalancing element
include('gcp/Item/Networking/CloudLoadBalancing')
CloudLoadBalancingCard('cloud_load_balancing', 'Cloud Load Balancing', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the CloudLoadBalancing element
include('gcp/Item/Networking/CloudLoadBalancing')
CloudLoadBalancingCard('cloud_load_balancing', 'Cloud Load Balancing', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the CloudLoadBalancing element
include('gcp/Item/Networking/CloudLoadBalancing')
CloudLoadBalancing('cloud_load_balancing', 'Cloud Load Balancing', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the CloudLoadBalancing element
include('gcp/Item/Networking/CloudLoadBalancing')
CloudLoadBalancing('cloud_load_balancing', 'Cloud Load Balancing', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the CloudLoadBalancing element
include('gcp/Item/Networking/CloudLoadBalancing')
CloudLoadBalancingGroup('cloud_load_balancing', 'Cloud Load Balancing', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the CloudLoadBalancing element
include('gcp/Item/Networking/CloudLoadBalancing')
CloudLoadBalancingGroup('cloud_load_balancing', 'Cloud Load Balancing', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

