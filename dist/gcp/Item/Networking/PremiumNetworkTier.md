# Premium Network Tier

```text
gcp/Item/Networking/PremiumNetworkTier
```

```text
include('gcp/Item/Networking/PremiumNetworkTier')
```

|icon|card|element|group|
|---|---|---|---|
|![](PremiumNetworkTier.png)|![](PremiumNetworkTier.card.png)|![](PremiumNetworkTier.element.png)|![](PremiumNetworkTier.group.png)|



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
' loads the PremiumNetworkTier element
include('gcp/Item/Networking/PremiumNetworkTier')
PremiumNetworkTierCard('premium_network_tier', 'Premium Network Tier', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the PremiumNetworkTier element
include('gcp/Item/Networking/PremiumNetworkTier')
PremiumNetworkTierCard('premium_network_tier', 'Premium Network Tier', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the PremiumNetworkTier element
include('gcp/Item/Networking/PremiumNetworkTier')
PremiumNetworkTier('premium_network_tier', 'Premium Network Tier', 'an optional tech field')
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
' loads the PremiumNetworkTier element
include('gcp/Item/Networking/PremiumNetworkTier')
PremiumNetworkTier('premium_network_tier', 'Premium Network Tier', 'an optional tech field')
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
' loads the PremiumNetworkTier element
include('gcp/Item/Networking/PremiumNetworkTier')
PremiumNetworkTierGroup('premium_network_tier', 'Premium Network Tier', 'an optional tech field'){
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
' loads the PremiumNetworkTier element
include('gcp/Item/Networking/PremiumNetworkTier')
PremiumNetworkTierGroup('premium_network_tier', 'Premium Network Tier', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

