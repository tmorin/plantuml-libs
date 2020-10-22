# Service Ssd

```text
azure-v2/Item/General/ServiceSsd
```

```text
include('azure-v2/Item/General/ServiceSsd')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceSsd.png)|![](ServiceSsd.card.png)|![](ServiceSsd.element.png)|![](ServiceSsd.group.png)|



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
' loads the ServiceSsd element
include('azure-v2/Item/General/ServiceSsd')
ServiceSsdCard('service_ssd', 'Service Ssd', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceSsd element
include('azure-v2/Item/General/ServiceSsd')
ServiceSsdCard('service_ssd', 'Service Ssd', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceSsd element
include('azure-v2/Item/General/ServiceSsd')
ServiceSsd('service_ssd', 'Service Ssd', 'an optional tech field')
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
' loads the ServiceSsd element
include('azure-v2/Item/General/ServiceSsd')
ServiceSsd('service_ssd', 'Service Ssd', 'an optional tech field')
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
' loads the ServiceSsd element
include('azure-v2/Item/General/ServiceSsd')
ServiceSsdGroup('service_ssd', 'Service Ssd', 'an optional tech field'){
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
' loads the ServiceSsd element
include('azure-v2/Item/General/ServiceSsd')
ServiceSsdGroup('service_ssd', 'Service Ssd', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

