# Service Web Test

```text
azure-v2/Item/General/ServiceWebTest
```

```text
include('azure-v2/Item/General/ServiceWebTest')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceWebTest.png)|![](ServiceWebTest.card.png)|![](ServiceWebTest.element.png)|![](ServiceWebTest.group.png)|



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
' loads the ServiceWebTest element
include('azure-v2/Item/General/ServiceWebTest')
ServiceWebTestCard('service_web_test', 'Service Web Test', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceWebTest element
include('azure-v2/Item/General/ServiceWebTest')
ServiceWebTestCard('service_web_test', 'Service Web Test', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceWebTest element
include('azure-v2/Item/General/ServiceWebTest')
ServiceWebTest('service_web_test', 'Service Web Test', 'an optional tech field')
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
' loads the ServiceWebTest element
include('azure-v2/Item/General/ServiceWebTest')
ServiceWebTest('service_web_test', 'Service Web Test', 'an optional tech field')
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
' loads the ServiceWebTest element
include('azure-v2/Item/General/ServiceWebTest')
ServiceWebTestGroup('service_web_test', 'Service Web Test', 'an optional tech field'){
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
' loads the ServiceWebTest element
include('azure-v2/Item/General/ServiceWebTest')
ServiceWebTestGroup('service_web_test', 'Service Web Test', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

