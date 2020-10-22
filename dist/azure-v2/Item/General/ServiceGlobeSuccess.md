# Service Globe Success

```text
azure-v2/Item/General/ServiceGlobeSuccess
```

```text
include('azure-v2/Item/General/ServiceGlobeSuccess')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceGlobeSuccess.png)|![](ServiceGlobeSuccess.card.png)|![](ServiceGlobeSuccess.element.png)|![](ServiceGlobeSuccess.group.png)|



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
' loads the ServiceGlobeSuccess element
include('azure-v2/Item/General/ServiceGlobeSuccess')
ServiceGlobeSuccessCard('service_globe_success', 'Service Globe Success', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceGlobeSuccess element
include('azure-v2/Item/General/ServiceGlobeSuccess')
ServiceGlobeSuccessCard('service_globe_success', 'Service Globe Success', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceGlobeSuccess element
include('azure-v2/Item/General/ServiceGlobeSuccess')
ServiceGlobeSuccess('service_globe_success', 'Service Globe Success', 'an optional tech field')
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
' loads the ServiceGlobeSuccess element
include('azure-v2/Item/General/ServiceGlobeSuccess')
ServiceGlobeSuccess('service_globe_success', 'Service Globe Success', 'an optional tech field')
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
' loads the ServiceGlobeSuccess element
include('azure-v2/Item/General/ServiceGlobeSuccess')
ServiceGlobeSuccessGroup('service_globe_success', 'Service Globe Success', 'an optional tech field'){
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
' loads the ServiceGlobeSuccess element
include('azure-v2/Item/General/ServiceGlobeSuccess')
ServiceGlobeSuccessGroup('service_globe_success', 'Service Globe Success', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

