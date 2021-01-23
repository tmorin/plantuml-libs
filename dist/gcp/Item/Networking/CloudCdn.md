# Cloud Cdn

```text
gcp/Item/Networking/CloudCdn
```

```text
include('gcp/Item/Networking/CloudCdn')
```

|icon|card|element|group|
|---|---|---|---|
|![](CloudCdn.png)|![](CloudCdn.card.png)|![](CloudCdn.element.png)|![](CloudCdn.group.png)|



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
' loads the CloudCdn element
include('gcp/Item/Networking/CloudCdn')
CloudCdnCard('cloud_cdn', 'Cloud Cdn', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudCdn element
include('gcp/Item/Networking/CloudCdn')
CloudCdnCard('cloud_cdn', 'Cloud Cdn', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudCdn element
include('gcp/Item/Networking/CloudCdn')
CloudCdn('cloud_cdn', 'Cloud Cdn', 'an optional tech field')
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
' loads the CloudCdn element
include('gcp/Item/Networking/CloudCdn')
CloudCdn('cloud_cdn', 'Cloud Cdn', 'an optional tech field')
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
' loads the CloudCdn element
include('gcp/Item/Networking/CloudCdn')
CloudCdnGroup('cloud_cdn', 'Cloud Cdn', 'an optional tech field'){
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
' loads the CloudCdn element
include('gcp/Item/Networking/CloudCdn')
CloudCdnGroup('cloud_cdn', 'Cloud Cdn', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

