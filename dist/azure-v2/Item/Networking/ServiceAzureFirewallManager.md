# Service Azure Firewall Manager

```text
azure-v2/Item/Networking/ServiceAzureFirewallManager
```

```text
include('azure-v2/Item/Networking/ServiceAzureFirewallManager')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceAzureFirewallManager.png)|![](ServiceAzureFirewallManager.card.png)|![](ServiceAzureFirewallManager.element.png)|![](ServiceAzureFirewallManager.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceAzureFirewallManager element
include('azure-v2/Item/Networking/ServiceAzureFirewallManager')
ServiceAzureFirewallManagerCard('service_azure_firewall_manager', 'Service Azure Firewall Manager', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceAzureFirewallManager element
include('azure-v2/Item/Networking/ServiceAzureFirewallManager')
ServiceAzureFirewallManagerCard('service_azure_firewall_manager', 'Service Azure Firewall Manager', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceAzureFirewallManager element
include('azure-v2/Item/Networking/ServiceAzureFirewallManager')
ServiceAzureFirewallManager('service_azure_firewall_manager', 'Service Azure Firewall Manager', 'an optional tech field')
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
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceAzureFirewallManager element
include('azure-v2/Item/Networking/ServiceAzureFirewallManager')
ServiceAzureFirewallManager('service_azure_firewall_manager', 'Service Azure Firewall Manager', 'an optional tech field')
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
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceAzureFirewallManager element
include('azure-v2/Item/Networking/ServiceAzureFirewallManager')
ServiceAzureFirewallManagerGroup('service_azure_firewall_manager', 'Service Azure Firewall Manager', 'an optional tech field'){
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
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceAzureFirewallManager element
include('azure-v2/Item/Networking/ServiceAzureFirewallManager')
ServiceAzureFirewallManagerGroup('service_azure_firewall_manager', 'Service Azure Firewall Manager', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

