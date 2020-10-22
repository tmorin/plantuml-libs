# Service Website Staging

```text
azure-v2/Item/General/ServiceWebsiteStaging
```

```text
include('azure-v2/Item/General/ServiceWebsiteStaging')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceWebsiteStaging.png)|![](ServiceWebsiteStaging.card.png)|![](ServiceWebsiteStaging.element.png)|![](ServiceWebsiteStaging.group.png)|



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
' loads the ServiceWebsiteStaging element
include('azure-v2/Item/General/ServiceWebsiteStaging')
ServiceWebsiteStagingCard('service_website_staging', 'Service Website Staging', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceWebsiteStaging element
include('azure-v2/Item/General/ServiceWebsiteStaging')
ServiceWebsiteStagingCard('service_website_staging', 'Service Website Staging', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceWebsiteStaging element
include('azure-v2/Item/General/ServiceWebsiteStaging')
ServiceWebsiteStaging('service_website_staging', 'Service Website Staging', 'an optional tech field')
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
' loads the ServiceWebsiteStaging element
include('azure-v2/Item/General/ServiceWebsiteStaging')
ServiceWebsiteStaging('service_website_staging', 'Service Website Staging', 'an optional tech field')
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
' loads the ServiceWebsiteStaging element
include('azure-v2/Item/General/ServiceWebsiteStaging')
ServiceWebsiteStagingGroup('service_website_staging', 'Service Website Staging', 'an optional tech field'){
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
' loads the ServiceWebsiteStaging element
include('azure-v2/Item/General/ServiceWebsiteStaging')
ServiceWebsiteStagingGroup('service_website_staging', 'Service Website Staging', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

