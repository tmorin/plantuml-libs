# Service Network Watcher

```text
azure-v2/Item/Networking/ServiceNetworkWatcher
```

```text
include('azure-v2/Item/Networking/ServiceNetworkWatcher')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceNetworkWatcher.png)|![](ServiceNetworkWatcher.card.png)|![](ServiceNetworkWatcher.element.png)|![](ServiceNetworkWatcher.group.png)|



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
' loads the ServiceNetworkWatcher element
include('azure-v2/Item/Networking/ServiceNetworkWatcher')
ServiceNetworkWatcherCard('service_network_watcher', 'Service Network Watcher', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceNetworkWatcher element
include('azure-v2/Item/Networking/ServiceNetworkWatcher')
ServiceNetworkWatcherCard('service_network_watcher', 'Service Network Watcher', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceNetworkWatcher element
include('azure-v2/Item/Networking/ServiceNetworkWatcher')
ServiceNetworkWatcher('service_network_watcher', 'Service Network Watcher', 'an optional tech field')
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
' loads the ServiceNetworkWatcher element
include('azure-v2/Item/Networking/ServiceNetworkWatcher')
ServiceNetworkWatcher('service_network_watcher', 'Service Network Watcher', 'an optional tech field')
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
' loads the ServiceNetworkWatcher element
include('azure-v2/Item/Networking/ServiceNetworkWatcher')
ServiceNetworkWatcherGroup('service_network_watcher', 'Service Network Watcher', 'an optional tech field'){
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
' loads the ServiceNetworkWatcher element
include('azure-v2/Item/Networking/ServiceNetworkWatcher')
ServiceNetworkWatcherGroup('service_network_watcher', 'Service Network Watcher', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

