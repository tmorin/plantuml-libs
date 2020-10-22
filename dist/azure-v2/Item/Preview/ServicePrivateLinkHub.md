# Service Private Link Hub

```text
azure-v2/Item/Preview/ServicePrivateLinkHub
```

```text
include('azure-v2/Item/Preview/ServicePrivateLinkHub')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServicePrivateLinkHub.png)|![](ServicePrivateLinkHub.card.png)|![](ServicePrivateLinkHub.element.png)|![](ServicePrivateLinkHub.group.png)|



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
' loads the ServicePrivateLinkHub element
include('azure-v2/Item/Preview/ServicePrivateLinkHub')
ServicePrivateLinkHubCard('service_private_link_hub', 'Service Private Link Hub', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServicePrivateLinkHub element
include('azure-v2/Item/Preview/ServicePrivateLinkHub')
ServicePrivateLinkHubCard('service_private_link_hub', 'Service Private Link Hub', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServicePrivateLinkHub element
include('azure-v2/Item/Preview/ServicePrivateLinkHub')
ServicePrivateLinkHub('service_private_link_hub', 'Service Private Link Hub', 'an optional tech field')
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
' loads the ServicePrivateLinkHub element
include('azure-v2/Item/Preview/ServicePrivateLinkHub')
ServicePrivateLinkHub('service_private_link_hub', 'Service Private Link Hub', 'an optional tech field')
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
' loads the ServicePrivateLinkHub element
include('azure-v2/Item/Preview/ServicePrivateLinkHub')
ServicePrivateLinkHubGroup('service_private_link_hub', 'Service Private Link Hub', 'an optional tech field'){
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
' loads the ServicePrivateLinkHub element
include('azure-v2/Item/Preview/ServicePrivateLinkHub')
ServicePrivateLinkHubGroup('service_private_link_hub', 'Service Private Link Hub', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

