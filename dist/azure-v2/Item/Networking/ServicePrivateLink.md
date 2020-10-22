# Service Private Link

```text
azure-v2/Item/Networking/ServicePrivateLink
```

```text
include('azure-v2/Item/Networking/ServicePrivateLink')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServicePrivateLink.png)|![](ServicePrivateLink.card.png)|![](ServicePrivateLink.element.png)|![](ServicePrivateLink.group.png)|



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
' loads the ServicePrivateLink element
include('azure-v2/Item/Networking/ServicePrivateLink')
ServicePrivateLinkCard('service_private_link', 'Service Private Link', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServicePrivateLink element
include('azure-v2/Item/Networking/ServicePrivateLink')
ServicePrivateLinkCard('service_private_link', 'Service Private Link', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServicePrivateLink element
include('azure-v2/Item/Networking/ServicePrivateLink')
ServicePrivateLink('service_private_link', 'Service Private Link', 'an optional tech field')
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
' loads the ServicePrivateLink element
include('azure-v2/Item/Networking/ServicePrivateLink')
ServicePrivateLink('service_private_link', 'Service Private Link', 'an optional tech field')
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
' loads the ServicePrivateLink element
include('azure-v2/Item/Networking/ServicePrivateLink')
ServicePrivateLinkGroup('service_private_link', 'Service Private Link', 'an optional tech field'){
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
' loads the ServicePrivateLink element
include('azure-v2/Item/Networking/ServicePrivateLink')
ServicePrivateLinkGroup('service_private_link', 'Service Private Link', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

