# Service Globe Error

```text
azure-v2/Item/General/ServiceGlobeError
```

```text
include('azure-v2/Item/General/ServiceGlobeError')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceGlobeError.png)|![](ServiceGlobeError.card.png)|![](ServiceGlobeError.element.png)|![](ServiceGlobeError.group.png)|



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
' loads the ServiceGlobeError element
include('azure-v2/Item/General/ServiceGlobeError')
ServiceGlobeErrorCard('service_globe_error', 'Service Globe Error', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceGlobeError element
include('azure-v2/Item/General/ServiceGlobeError')
ServiceGlobeErrorCard('service_globe_error', 'Service Globe Error', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceGlobeError element
include('azure-v2/Item/General/ServiceGlobeError')
ServiceGlobeError('service_globe_error', 'Service Globe Error', 'an optional tech field')
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
' loads the ServiceGlobeError element
include('azure-v2/Item/General/ServiceGlobeError')
ServiceGlobeError('service_globe_error', 'Service Globe Error', 'an optional tech field')
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
' loads the ServiceGlobeError element
include('azure-v2/Item/General/ServiceGlobeError')
ServiceGlobeErrorGroup('service_globe_error', 'Service Globe Error', 'an optional tech field'){
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
' loads the ServiceGlobeError element
include('azure-v2/Item/General/ServiceGlobeError')
ServiceGlobeErrorGroup('service_globe_error', 'Service Globe Error', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

