# Standard Network Tier

```text
gcp/Item/Networking/StandardNetworkTier
```

```text
include('gcp/Item/Networking/StandardNetworkTier')
```

|icon|card|element|group|
|---|---|---|---|
|![](StandardNetworkTier.png)|![](StandardNetworkTier.card.png)|![](StandardNetworkTier.element.png)|![](StandardNetworkTier.group.png)|



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
' loads the StandardNetworkTier element
include('gcp/Item/Networking/StandardNetworkTier')
StandardNetworkTierCard('standard_network_tier', 'Standard Network Tier', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the StandardNetworkTier element
include('gcp/Item/Networking/StandardNetworkTier')
StandardNetworkTierCard('standard_network_tier', 'Standard Network Tier', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the StandardNetworkTier element
include('gcp/Item/Networking/StandardNetworkTier')
StandardNetworkTier('standard_network_tier', 'Standard Network Tier', 'an optional tech field')
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
' loads the StandardNetworkTier element
include('gcp/Item/Networking/StandardNetworkTier')
StandardNetworkTier('standard_network_tier', 'Standard Network Tier', 'an optional tech field')
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
' loads the StandardNetworkTier element
include('gcp/Item/Networking/StandardNetworkTier')
StandardNetworkTierGroup('standard_network_tier', 'Standard Network Tier', 'an optional tech field'){
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
' loads the StandardNetworkTier element
include('gcp/Item/Networking/StandardNetworkTier')
StandardNetworkTierGroup('standard_network_tier', 'Standard Network Tier', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

