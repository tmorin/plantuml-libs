# Service Mobile

```text
azure-v2/Item/General/ServiceMobile
```

```text
include('azure-v2/Item/General/ServiceMobile')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceMobile.png)|![](ServiceMobile.card.png)|![](ServiceMobile.element.png)|![](ServiceMobile.group.png)|



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
' loads the ServiceMobile element
include('azure-v2/Item/General/ServiceMobile')
ServiceMobileCard('service_mobile', 'Service Mobile', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceMobile element
include('azure-v2/Item/General/ServiceMobile')
ServiceMobileCard('service_mobile', 'Service Mobile', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceMobile element
include('azure-v2/Item/General/ServiceMobile')
ServiceMobile('service_mobile', 'Service Mobile', 'an optional tech field')
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
' loads the ServiceMobile element
include('azure-v2/Item/General/ServiceMobile')
ServiceMobile('service_mobile', 'Service Mobile', 'an optional tech field')
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
' loads the ServiceMobile element
include('azure-v2/Item/General/ServiceMobile')
ServiceMobileGroup('service_mobile', 'Service Mobile', 'an optional tech field'){
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
' loads the ServiceMobile element
include('azure-v2/Item/General/ServiceMobile')
ServiceMobileGroup('service_mobile', 'Service Mobile', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

