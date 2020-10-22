# Service Application Security Groups

```text
azure-v2/Item/Security/ServiceApplicationSecurityGroups
```

```text
include('azure-v2/Item/Security/ServiceApplicationSecurityGroups')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceApplicationSecurityGroups.png)|![](ServiceApplicationSecurityGroups.card.png)|![](ServiceApplicationSecurityGroups.element.png)|![](ServiceApplicationSecurityGroups.group.png)|



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
' loads the ServiceApplicationSecurityGroups element
include('azure-v2/Item/Security/ServiceApplicationSecurityGroups')
ServiceApplicationSecurityGroupsCard('service_application_security_groups', 'Service Application Security Groups', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceApplicationSecurityGroups element
include('azure-v2/Item/Security/ServiceApplicationSecurityGroups')
ServiceApplicationSecurityGroupsCard('service_application_security_groups', 'Service Application Security Groups', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceApplicationSecurityGroups element
include('azure-v2/Item/Security/ServiceApplicationSecurityGroups')
ServiceApplicationSecurityGroups('service_application_security_groups', 'Service Application Security Groups', 'an optional tech field')
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
' loads the ServiceApplicationSecurityGroups element
include('azure-v2/Item/Security/ServiceApplicationSecurityGroups')
ServiceApplicationSecurityGroups('service_application_security_groups', 'Service Application Security Groups', 'an optional tech field')
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
' loads the ServiceApplicationSecurityGroups element
include('azure-v2/Item/Security/ServiceApplicationSecurityGroups')
ServiceApplicationSecurityGroupsGroup('service_application_security_groups', 'Service Application Security Groups', 'an optional tech field'){
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
' loads the ServiceApplicationSecurityGroups element
include('azure-v2/Item/Security/ServiceApplicationSecurityGroups')
ServiceApplicationSecurityGroupsGroup('service_application_security_groups', 'Service Application Security Groups', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

