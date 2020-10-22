# Service Software As A Service

```text
azure-v2/Item/Integration/ServiceSoftwareAsAService
```

```text
include('azure-v2/Item/Integration/ServiceSoftwareAsAService')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceSoftwareAsAService.png)|![](ServiceSoftwareAsAService.card.png)|![](ServiceSoftwareAsAService.element.png)|![](ServiceSoftwareAsAService.group.png)|



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
' loads the ServiceSoftwareAsAService element
include('azure-v2/Item/Integration/ServiceSoftwareAsAService')
ServiceSoftwareAsAServiceCard('service_software_as_a_service', 'Service Software As A Service', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceSoftwareAsAService element
include('azure-v2/Item/Integration/ServiceSoftwareAsAService')
ServiceSoftwareAsAServiceCard('service_software_as_a_service', 'Service Software As A Service', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceSoftwareAsAService element
include('azure-v2/Item/Integration/ServiceSoftwareAsAService')
ServiceSoftwareAsAService('service_software_as_a_service', 'Service Software As A Service', 'an optional tech field')
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
' loads the ServiceSoftwareAsAService element
include('azure-v2/Item/Integration/ServiceSoftwareAsAService')
ServiceSoftwareAsAService('service_software_as_a_service', 'Service Software As A Service', 'an optional tech field')
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
' loads the ServiceSoftwareAsAService element
include('azure-v2/Item/Integration/ServiceSoftwareAsAService')
ServiceSoftwareAsAServiceGroup('service_software_as_a_service', 'Service Software As A Service', 'an optional tech field'){
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
' loads the ServiceSoftwareAsAService element
include('azure-v2/Item/Integration/ServiceSoftwareAsAService')
ServiceSoftwareAsAServiceGroup('service_software_as_a_service', 'Service Software As A Service', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

