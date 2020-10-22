# Service Ftp

```text
azure-v2/Item/General/ServiceFtp
```

```text
include('azure-v2/Item/General/ServiceFtp')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceFtp.png)|![](ServiceFtp.card.png)|![](ServiceFtp.element.png)|![](ServiceFtp.group.png)|



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
' loads the ServiceFtp element
include('azure-v2/Item/General/ServiceFtp')
ServiceFtpCard('service_ftp', 'Service Ftp', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceFtp element
include('azure-v2/Item/General/ServiceFtp')
ServiceFtpCard('service_ftp', 'Service Ftp', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceFtp element
include('azure-v2/Item/General/ServiceFtp')
ServiceFtp('service_ftp', 'Service Ftp', 'an optional tech field')
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
' loads the ServiceFtp element
include('azure-v2/Item/General/ServiceFtp')
ServiceFtp('service_ftp', 'Service Ftp', 'an optional tech field')
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
' loads the ServiceFtp element
include('azure-v2/Item/General/ServiceFtp')
ServiceFtpGroup('service_ftp', 'Service Ftp', 'an optional tech field'){
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
' loads the ServiceFtp element
include('azure-v2/Item/General/ServiceFtp')
ServiceFtpGroup('service_ftp', 'Service Ftp', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

