# Cloud Firewall Rules

```text
gcp/Item/Networking/CloudFirewallRules
```

```text
include('gcp/Item/Networking/CloudFirewallRules')
```

|icon|card|element|group|
|---|---|---|---|
|![](CloudFirewallRules.png)|![](CloudFirewallRules.card.png)|![](CloudFirewallRules.element.png)|![](CloudFirewallRules.group.png)|



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
' loads the CloudFirewallRules element
include('gcp/Item/Networking/CloudFirewallRules')
CloudFirewallRulesCard('cloud_firewall_rules', 'Cloud Firewall Rules', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudFirewallRules element
include('gcp/Item/Networking/CloudFirewallRules')
CloudFirewallRulesCard('cloud_firewall_rules', 'Cloud Firewall Rules', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudFirewallRules element
include('gcp/Item/Networking/CloudFirewallRules')
CloudFirewallRules('cloud_firewall_rules', 'Cloud Firewall Rules', 'an optional tech field')
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
' loads the CloudFirewallRules element
include('gcp/Item/Networking/CloudFirewallRules')
CloudFirewallRules('cloud_firewall_rules', 'Cloud Firewall Rules', 'an optional tech field')
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
' loads the CloudFirewallRules element
include('gcp/Item/Networking/CloudFirewallRules')
CloudFirewallRulesGroup('cloud_firewall_rules', 'Cloud Firewall Rules', 'an optional tech field'){
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
' loads the CloudFirewallRules element
include('gcp/Item/Networking/CloudFirewallRules')
CloudFirewallRulesGroup('cloud_firewall_rules', 'Cloud Firewall Rules', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

