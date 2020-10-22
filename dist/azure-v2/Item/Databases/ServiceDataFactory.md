# Service Data Factory

```text
azure-v2/Item/Databases/ServiceDataFactory
```

```text
include('azure-v2/Item/Databases/ServiceDataFactory')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceDataFactory.png)|![](ServiceDataFactory.card.png)|![](ServiceDataFactory.element.png)|![](ServiceDataFactory.group.png)|



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
' loads the ServiceDataFactory element
include('azure-v2/Item/Databases/ServiceDataFactory')
ServiceDataFactoryCard('service_data_factory', 'Service Data Factory', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceDataFactory element
include('azure-v2/Item/Databases/ServiceDataFactory')
ServiceDataFactoryCard('service_data_factory', 'Service Data Factory', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceDataFactory element
include('azure-v2/Item/Databases/ServiceDataFactory')
ServiceDataFactory('service_data_factory', 'Service Data Factory', 'an optional tech field')
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
' loads the ServiceDataFactory element
include('azure-v2/Item/Databases/ServiceDataFactory')
ServiceDataFactory('service_data_factory', 'Service Data Factory', 'an optional tech field')
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
' loads the ServiceDataFactory element
include('azure-v2/Item/Databases/ServiceDataFactory')
ServiceDataFactoryGroup('service_data_factory', 'Service Data Factory', 'an optional tech field'){
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
' loads the ServiceDataFactory element
include('azure-v2/Item/Databases/ServiceDataFactory')
ServiceDataFactoryGroup('service_data_factory', 'Service Data Factory', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

