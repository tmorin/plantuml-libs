# Service Load Test

```text
azure-v2/Item/General/ServiceLoadTest
```

```text
include('azure-v2/Item/General/ServiceLoadTest')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceLoadTest.png)|![](ServiceLoadTest.card.png)|![](ServiceLoadTest.element.png)|![](ServiceLoadTest.group.png)|



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
' loads the ServiceLoadTest element
include('azure-v2/Item/General/ServiceLoadTest')
ServiceLoadTestCard('service_load_test', 'Service Load Test', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceLoadTest element
include('azure-v2/Item/General/ServiceLoadTest')
ServiceLoadTestCard('service_load_test', 'Service Load Test', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceLoadTest element
include('azure-v2/Item/General/ServiceLoadTest')
ServiceLoadTest('service_load_test', 'Service Load Test', 'an optional tech field')
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
' loads the ServiceLoadTest element
include('azure-v2/Item/General/ServiceLoadTest')
ServiceLoadTest('service_load_test', 'Service Load Test', 'an optional tech field')
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
' loads the ServiceLoadTest element
include('azure-v2/Item/General/ServiceLoadTest')
ServiceLoadTestGroup('service_load_test', 'Service Load Test', 'an optional tech field'){
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
' loads the ServiceLoadTest element
include('azure-v2/Item/General/ServiceLoadTest')
ServiceLoadTestGroup('service_load_test', 'Service Load Test', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

