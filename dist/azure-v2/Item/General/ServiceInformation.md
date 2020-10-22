# Service Information

```text
azure-v2/Item/General/ServiceInformation
```

```text
include('azure-v2/Item/General/ServiceInformation')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceInformation.png)|![](ServiceInformation.card.png)|![](ServiceInformation.element.png)|![](ServiceInformation.group.png)|



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
' loads the ServiceInformation element
include('azure-v2/Item/General/ServiceInformation')
ServiceInformationCard('service_information', 'Service Information', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceInformation element
include('azure-v2/Item/General/ServiceInformation')
ServiceInformationCard('service_information', 'Service Information', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceInformation element
include('azure-v2/Item/General/ServiceInformation')
ServiceInformation('service_information', 'Service Information', 'an optional tech field')
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
' loads the ServiceInformation element
include('azure-v2/Item/General/ServiceInformation')
ServiceInformation('service_information', 'Service Information', 'an optional tech field')
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
' loads the ServiceInformation element
include('azure-v2/Item/General/ServiceInformation')
ServiceInformationGroup('service_information', 'Service Information', 'an optional tech field'){
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
' loads the ServiceInformation element
include('azure-v2/Item/General/ServiceInformation')
ServiceInformationGroup('service_information', 'Service Information', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

