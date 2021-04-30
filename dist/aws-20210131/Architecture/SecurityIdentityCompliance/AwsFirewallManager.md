# Aws Firewall Manager

```text
aws-20210131/Architecture/SecurityIdentityCompliance/AwsFirewallManager
```

```text
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsFirewallManager')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsFirewallManager.png)|![](AwsFirewallManager.card.png)|![](AwsFirewallManager.element.png)|![](AwsFirewallManager.group.png)|



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
' loads the AwsFirewallManager element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsFirewallManager')
AwsFirewallManagerCard('aws_firewall_manager', 'Aws Firewall Manager', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsFirewallManager element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsFirewallManager')
AwsFirewallManagerCard('aws_firewall_manager', 'Aws Firewall Manager', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsFirewallManager element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsFirewallManager')
AwsFirewallManager('aws_firewall_manager', 'Aws Firewall Manager', 'an optional tech field')
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
' loads the AwsFirewallManager element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsFirewallManager')
AwsFirewallManager('aws_firewall_manager', 'Aws Firewall Manager', 'an optional tech field')
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
' loads the AwsFirewallManager element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsFirewallManager')
AwsFirewallManagerGroup('aws_firewall_manager', 'Aws Firewall Manager', 'an optional tech field'){
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
' loads the AwsFirewallManager element
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsFirewallManager')
AwsFirewallManagerGroup('aws_firewall_manager', 'Aws Firewall Manager', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

