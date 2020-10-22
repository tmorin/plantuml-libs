# Security Hub Finding

```text
aws-20200430/Item/SecurityIdentityCompliance/SecurityHubFinding
```

```text
include('aws-20200430/Item/SecurityIdentityCompliance/SecurityHubFinding')
```

|icon|card|element|group|
|---|---|---|---|
|![](SecurityHubFinding.png)|![](SecurityHubFinding.card.png)|![](SecurityHubFinding.element.png)|![](SecurityHubFinding.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the SecurityHubFinding element
include('aws-20200430/Item/SecurityIdentityCompliance/SecurityHubFinding')
SecurityHubFindingCard('security_hub_finding', 'Security Hub Finding', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the SecurityHubFinding element
include('aws-20200430/Item/SecurityIdentityCompliance/SecurityHubFinding')
SecurityHubFindingCard('security_hub_finding', 'Security Hub Finding', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the SecurityHubFinding element
include('aws-20200430/Item/SecurityIdentityCompliance/SecurityHubFinding')
SecurityHubFinding('security_hub_finding', 'Security Hub Finding', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the SecurityHubFinding element
include('aws-20200430/Item/SecurityIdentityCompliance/SecurityHubFinding')
SecurityHubFinding('security_hub_finding', 'Security Hub Finding', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the SecurityHubFinding element
include('aws-20200430/Item/SecurityIdentityCompliance/SecurityHubFinding')
SecurityHubFindingGroup('security_hub_finding', 'Security Hub Finding', 'an optional tech field'){
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the SecurityHubFinding element
include('aws-20200430/Item/SecurityIdentityCompliance/SecurityHubFinding')
SecurityHubFindingGroup('security_hub_finding', 'Security Hub Finding', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

