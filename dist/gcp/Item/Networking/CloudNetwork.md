# Cloud Network

```text
gcp/Item/Networking/CloudNetwork
```

```text
include('gcp/Item/Networking/CloudNetwork')
```

|icon|card|element|group|
|---|---|---|---|
|![](CloudNetwork.png)|![](CloudNetwork.card.png)|![](CloudNetwork.element.png)|![](CloudNetwork.group.png)|



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
' loads the CloudNetwork element
include('gcp/Item/Networking/CloudNetwork')
CloudNetworkCard('cloud_network', 'Cloud Network', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudNetwork element
include('gcp/Item/Networking/CloudNetwork')
CloudNetworkCard('cloud_network', 'Cloud Network', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudNetwork element
include('gcp/Item/Networking/CloudNetwork')
CloudNetwork('cloud_network', 'Cloud Network', 'an optional tech field')
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
' loads the CloudNetwork element
include('gcp/Item/Networking/CloudNetwork')
CloudNetwork('cloud_network', 'Cloud Network', 'an optional tech field')
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
' loads the CloudNetwork element
include('gcp/Item/Networking/CloudNetwork')
CloudNetworkGroup('cloud_network', 'Cloud Network', 'an optional tech field'){
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
' loads the CloudNetwork element
include('gcp/Item/Networking/CloudNetwork')
CloudNetworkGroup('cloud_network', 'Cloud Network', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

