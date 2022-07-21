# PremiumNetworkTier


```text
gcp/Item/PremiumNetworkTier
```

```text
include('gcp/Item/PremiumNetworkTier')
```



| Illustration | PremiumNetworkTier | PremiumNetworkTierCard | PremiumNetworkTierGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../gcp/Item/PremiumNetworkTier.png) | ![illustration for PremiumNetworkTier](../../gcp/Item/PremiumNetworkTier.Local.png) | ![illustration for PremiumNetworkTierCard](../../gcp/Item/PremiumNetworkTierCard.Local.png) | ![illustration for PremiumNetworkTierGroup](../../gcp/Item/PremiumNetworkTierGroup.Local.png) |




## PremiumNetworkTier

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element PremiumNetworkTier
include('gcp/Item/PremiumNetworkTier')

' renders the element
PremiumNetworkTier('PremiumNetworkTier', 'Premium Network Tier', 'an optional tech label', 'an optional description')
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
include('gcp/bootstrap')

' loads the Item which embeds the element PremiumNetworkTier
include('gcp/Item/PremiumNetworkTier')

' renders the element
PremiumNetworkTier('PremiumNetworkTier', 'Premium Network Tier', 'an optional tech label', 'an optional description')
@enduml
```

## PremiumNetworkTierCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element PremiumNetworkTierCard
include('gcp/Item/PremiumNetworkTier')

' renders the element
PremiumNetworkTierCard('PremiumNetworkTierCard', 'Premium Network Tier Card', 'an optional description')
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
include('gcp/bootstrap')

' loads the Item which embeds the element PremiumNetworkTierCard
include('gcp/Item/PremiumNetworkTier')

' renders the element
PremiumNetworkTierCard('PremiumNetworkTierCard', 'Premium Network Tier Card', 'an optional description')
@enduml
```

## PremiumNetworkTierGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element PremiumNetworkTierGroup
include('gcp/Item/PremiumNetworkTier')

' renders the element
PremiumNetworkTierGroup('PremiumNetworkTierGroup', 'Premium Network Tier Group', 'an optional tech label') {
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
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element PremiumNetworkTierGroup
include('gcp/Item/PremiumNetworkTier')

' renders the element
PremiumNetworkTierGroup('PremiumNetworkTierGroup', 'Premium Network Tier Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

