# Cloud Interconnect

```text
gcp/Item/Networking/CloudInterconnect
```

```text
include('gcp/Item/Networking/CloudInterconnect')
```

|icon|card|element|group|
|---|---|---|---|
|![](CloudInterconnect.png)|![](CloudInterconnect.card.png)|![](CloudInterconnect.element.png)|![](CloudInterconnect.group.png)|



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
' loads the CloudInterconnect element
include('gcp/Item/Networking/CloudInterconnect')
CloudInterconnectCard('cloud_interconnect', 'Cloud Interconnect', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudInterconnect element
include('gcp/Item/Networking/CloudInterconnect')
CloudInterconnectCard('cloud_interconnect', 'Cloud Interconnect', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudInterconnect element
include('gcp/Item/Networking/CloudInterconnect')
CloudInterconnect('cloud_interconnect', 'Cloud Interconnect', 'an optional tech field')
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
' loads the CloudInterconnect element
include('gcp/Item/Networking/CloudInterconnect')
CloudInterconnect('cloud_interconnect', 'Cloud Interconnect', 'an optional tech field')
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
' loads the CloudInterconnect element
include('gcp/Item/Networking/CloudInterconnect')
CloudInterconnectGroup('cloud_interconnect', 'Cloud Interconnect', 'an optional tech field'){
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
' loads the CloudInterconnect element
include('gcp/Item/Networking/CloudInterconnect')
CloudInterconnectGroup('cloud_interconnect', 'Cloud Interconnect', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

