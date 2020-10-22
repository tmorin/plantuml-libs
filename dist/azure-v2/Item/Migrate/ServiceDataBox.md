# Service Data Box

```text
azure-v2/Item/Migrate/ServiceDataBox
```

```text
include('azure-v2/Item/Migrate/ServiceDataBox')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceDataBox.png)|![](ServiceDataBox.card.png)|![](ServiceDataBox.element.png)|![](ServiceDataBox.group.png)|



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
' loads the ServiceDataBox element
include('azure-v2/Item/Migrate/ServiceDataBox')
ServiceDataBoxCard('service_data_box', 'Service Data Box', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceDataBox element
include('azure-v2/Item/Migrate/ServiceDataBox')
ServiceDataBoxCard('service_data_box', 'Service Data Box', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceDataBox element
include('azure-v2/Item/Migrate/ServiceDataBox')
ServiceDataBox('service_data_box', 'Service Data Box', 'an optional tech field')
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
' loads the ServiceDataBox element
include('azure-v2/Item/Migrate/ServiceDataBox')
ServiceDataBox('service_data_box', 'Service Data Box', 'an optional tech field')
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
' loads the ServiceDataBox element
include('azure-v2/Item/Migrate/ServiceDataBox')
ServiceDataBoxGroup('service_data_box', 'Service Data Box', 'an optional tech field'){
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
' loads the ServiceDataBox element
include('azure-v2/Item/Migrate/ServiceDataBox')
ServiceDataBoxGroup('service_data_box', 'Service Data Box', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

