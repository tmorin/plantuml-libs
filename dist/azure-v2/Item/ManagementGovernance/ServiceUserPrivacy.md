# Service User Privacy

```text
azure-v2/Item/ManagementGovernance/ServiceUserPrivacy
```

```text
include('azure-v2/Item/ManagementGovernance/ServiceUserPrivacy')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceUserPrivacy.png)|![](ServiceUserPrivacy.card.png)|![](ServiceUserPrivacy.element.png)|![](ServiceUserPrivacy.group.png)|



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
' loads the ServiceUserPrivacy element
include('azure-v2/Item/ManagementGovernance/ServiceUserPrivacy')
ServiceUserPrivacyCard('service_user_privacy', 'Service User Privacy', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceUserPrivacy element
include('azure-v2/Item/ManagementGovernance/ServiceUserPrivacy')
ServiceUserPrivacyCard('service_user_privacy', 'Service User Privacy', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceUserPrivacy element
include('azure-v2/Item/ManagementGovernance/ServiceUserPrivacy')
ServiceUserPrivacy('service_user_privacy', 'Service User Privacy', 'an optional tech field')
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
' loads the ServiceUserPrivacy element
include('azure-v2/Item/ManagementGovernance/ServiceUserPrivacy')
ServiceUserPrivacy('service_user_privacy', 'Service User Privacy', 'an optional tech field')
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
' loads the ServiceUserPrivacy element
include('azure-v2/Item/ManagementGovernance/ServiceUserPrivacy')
ServiceUserPrivacyGroup('service_user_privacy', 'Service User Privacy', 'an optional tech field'){
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
' loads the ServiceUserPrivacy element
include('azure-v2/Item/ManagementGovernance/ServiceUserPrivacy')
ServiceUserPrivacyGroup('service_user_privacy', 'Service User Privacy', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

