# Aws Network Firewall

```text
aws-20210131/Architecture/SecurityIdentityCompliance/AwsNetworkFirewall
```

```text
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsNetworkFirewall')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsNetworkFirewall.png)|![](AwsNetworkFirewall.card.png)|![](AwsNetworkFirewall.element.png)|![](AwsNetworkFirewall.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsNetworkFirewall element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsNetworkFirewall')
AwsNetworkFirewallCard('aws_network_firewall', 'Aws Network Firewall', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsNetworkFirewall element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsNetworkFirewall')
AwsNetworkFirewallCard('aws_network_firewall', 'Aws Network Firewall', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsNetworkFirewall element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsNetworkFirewall')
AwsNetworkFirewall('aws_network_firewall', 'Aws Network Firewall', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsNetworkFirewall element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsNetworkFirewall')
AwsNetworkFirewall('aws_network_firewall', 'Aws Network Firewall', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsNetworkFirewall element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsNetworkFirewall')
AwsNetworkFirewallGroup('aws_network_firewall', 'Aws Network Firewall', 'an optional tech field'){
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsNetworkFirewall element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsNetworkFirewall')
AwsNetworkFirewallGroup('aws_network_firewall', 'Aws Network Firewall', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

