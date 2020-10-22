# Service User Subscriptions

```text
azure-v2/Item/AzureStack/ServiceUserSubscriptions
```

```text
include('azure-v2/Item/AzureStack/ServiceUserSubscriptions')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceUserSubscriptions.png)|![](ServiceUserSubscriptions.card.png)|![](ServiceUserSubscriptions.element.png)|![](ServiceUserSubscriptions.group.png)|



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
' loads the ServiceUserSubscriptions element
include('azure-v2/Item/AzureStack/ServiceUserSubscriptions')
ServiceUserSubscriptionsCard('service_user_subscriptions', 'Service User Subscriptions', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceUserSubscriptions element
include('azure-v2/Item/AzureStack/ServiceUserSubscriptions')
ServiceUserSubscriptionsCard('service_user_subscriptions', 'Service User Subscriptions', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceUserSubscriptions element
include('azure-v2/Item/AzureStack/ServiceUserSubscriptions')
ServiceUserSubscriptions('service_user_subscriptions', 'Service User Subscriptions', 'an optional tech field')
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
' loads the ServiceUserSubscriptions element
include('azure-v2/Item/AzureStack/ServiceUserSubscriptions')
ServiceUserSubscriptions('service_user_subscriptions', 'Service User Subscriptions', 'an optional tech field')
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
' loads the ServiceUserSubscriptions element
include('azure-v2/Item/AzureStack/ServiceUserSubscriptions')
ServiceUserSubscriptionsGroup('service_user_subscriptions', 'Service User Subscriptions', 'an optional tech field'){
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
' loads the ServiceUserSubscriptions element
include('azure-v2/Item/AzureStack/ServiceUserSubscriptions')
ServiceUserSubscriptionsGroup('service_user_subscriptions', 'Service User Subscriptions', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

