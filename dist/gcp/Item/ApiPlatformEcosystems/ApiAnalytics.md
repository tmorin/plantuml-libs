# Api Analytics

```text
gcp/Item/ApiPlatformEcosystems/ApiAnalytics
```

```text
include('gcp/Item/ApiPlatformEcosystems/ApiAnalytics')
```

|icon|card|element|group|
|---|---|---|---|
|![](ApiAnalytics.png)|![](ApiAnalytics.card.png)|![](ApiAnalytics.element.png)|![](ApiAnalytics.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the ApiAnalytics element
include('gcp/Item/ApiPlatformEcosystems/ApiAnalytics')
ApiAnalyticsCard('api_analytics', 'Api Analytics', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the ApiAnalytics element
include('gcp/Item/ApiPlatformEcosystems/ApiAnalytics')
ApiAnalyticsCard('api_analytics', 'Api Analytics', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the ApiAnalytics element
include('gcp/Item/ApiPlatformEcosystems/ApiAnalytics')
ApiAnalytics('api_analytics', 'Api Analytics', 'an optional tech field')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the ApiAnalytics element
include('gcp/Item/ApiPlatformEcosystems/ApiAnalytics')
ApiAnalytics('api_analytics', 'Api Analytics', 'an optional tech field')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the ApiAnalytics element
include('gcp/Item/ApiPlatformEcosystems/ApiAnalytics')
ApiAnalyticsGroup('api_analytics', 'Api Analytics', 'an optional tech field'){
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the ApiAnalytics element
include('gcp/Item/ApiPlatformEcosystems/ApiAnalytics')
ApiAnalyticsGroup('api_analytics', 'Api Analytics', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

