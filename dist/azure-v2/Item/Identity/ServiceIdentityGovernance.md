# Service Identity Governance

```text
azure-v2/Item/Identity/ServiceIdentityGovernance
```

```text
include('azure-v2/Item/Identity/ServiceIdentityGovernance')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceIdentityGovernance.png)|![](ServiceIdentityGovernance.card.png)|![](ServiceIdentityGovernance.element.png)|![](ServiceIdentityGovernance.group.png)|



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
' loads the ServiceIdentityGovernance element
include('azure-v2/Item/Identity/ServiceIdentityGovernance')
ServiceIdentityGovernanceCard('service_identity_governance', 'Service Identity Governance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceIdentityGovernance element
include('azure-v2/Item/Identity/ServiceIdentityGovernance')
ServiceIdentityGovernanceCard('service_identity_governance', 'Service Identity Governance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceIdentityGovernance element
include('azure-v2/Item/Identity/ServiceIdentityGovernance')
ServiceIdentityGovernance('service_identity_governance', 'Service Identity Governance', 'an optional tech field')
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
' loads the ServiceIdentityGovernance element
include('azure-v2/Item/Identity/ServiceIdentityGovernance')
ServiceIdentityGovernance('service_identity_governance', 'Service Identity Governance', 'an optional tech field')
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
' loads the ServiceIdentityGovernance element
include('azure-v2/Item/Identity/ServiceIdentityGovernance')
ServiceIdentityGovernanceGroup('service_identity_governance', 'Service Identity Governance', 'an optional tech field'){
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
' loads the ServiceIdentityGovernance element
include('azure-v2/Item/Identity/ServiceIdentityGovernance')
ServiceIdentityGovernanceGroup('service_identity_governance', 'Service Identity Governance', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

