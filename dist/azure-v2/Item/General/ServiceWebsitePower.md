# Service Website Power

```text
azure-v2/Item/General/ServiceWebsitePower
```

```text
include('azure-v2/Item/General/ServiceWebsitePower')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceWebsitePower.png)|![](ServiceWebsitePower.card.png)|![](ServiceWebsitePower.element.png)|![](ServiceWebsitePower.group.png)|



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
' loads the ServiceWebsitePower element
include('azure-v2/Item/General/ServiceWebsitePower')
ServiceWebsitePowerCard('service_website_power', 'Service Website Power', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceWebsitePower element
include('azure-v2/Item/General/ServiceWebsitePower')
ServiceWebsitePowerCard('service_website_power', 'Service Website Power', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceWebsitePower element
include('azure-v2/Item/General/ServiceWebsitePower')
ServiceWebsitePower('service_website_power', 'Service Website Power', 'an optional tech field')
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
' loads the ServiceWebsitePower element
include('azure-v2/Item/General/ServiceWebsitePower')
ServiceWebsitePower('service_website_power', 'Service Website Power', 'an optional tech field')
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
' loads the ServiceWebsitePower element
include('azure-v2/Item/General/ServiceWebsitePower')
ServiceWebsitePowerGroup('service_website_power', 'Service Website Power', 'an optional tech field'){
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
' loads the ServiceWebsitePower element
include('azure-v2/Item/General/ServiceWebsitePower')
ServiceWebsitePowerGroup('service_website_power', 'Service Website Power', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

