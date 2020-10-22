# Service Mobile Engagement

```text
azure-v2/Item/General/ServiceMobileEngagement
```

```text
include('azure-v2/Item/General/ServiceMobileEngagement')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceMobileEngagement.png)|![](ServiceMobileEngagement.card.png)|![](ServiceMobileEngagement.element.png)|![](ServiceMobileEngagement.group.png)|



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
' loads the ServiceMobileEngagement element
include('azure-v2/Item/General/ServiceMobileEngagement')
ServiceMobileEngagementCard('service_mobile_engagement', 'Service Mobile Engagement', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceMobileEngagement element
include('azure-v2/Item/General/ServiceMobileEngagement')
ServiceMobileEngagementCard('service_mobile_engagement', 'Service Mobile Engagement', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceMobileEngagement element
include('azure-v2/Item/General/ServiceMobileEngagement')
ServiceMobileEngagement('service_mobile_engagement', 'Service Mobile Engagement', 'an optional tech field')
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
' loads the ServiceMobileEngagement element
include('azure-v2/Item/General/ServiceMobileEngagement')
ServiceMobileEngagement('service_mobile_engagement', 'Service Mobile Engagement', 'an optional tech field')
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
' loads the ServiceMobileEngagement element
include('azure-v2/Item/General/ServiceMobileEngagement')
ServiceMobileEngagementGroup('service_mobile_engagement', 'Service Mobile Engagement', 'an optional tech field'){
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
' loads the ServiceMobileEngagement element
include('azure-v2/Item/General/ServiceMobileEngagement')
ServiceMobileEngagementGroup('service_mobile_engagement', 'Service Mobile Engagement', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

