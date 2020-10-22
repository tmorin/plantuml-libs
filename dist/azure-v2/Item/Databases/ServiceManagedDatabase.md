# Service Managed Database

```text
azure-v2/Item/Databases/ServiceManagedDatabase
```

```text
include('azure-v2/Item/Databases/ServiceManagedDatabase')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceManagedDatabase.png)|![](ServiceManagedDatabase.card.png)|![](ServiceManagedDatabase.element.png)|![](ServiceManagedDatabase.group.png)|



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
' loads the ServiceManagedDatabase element
include('azure-v2/Item/Databases/ServiceManagedDatabase')
ServiceManagedDatabaseCard('service_managed_database', 'Service Managed Database', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceManagedDatabase element
include('azure-v2/Item/Databases/ServiceManagedDatabase')
ServiceManagedDatabaseCard('service_managed_database', 'Service Managed Database', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceManagedDatabase element
include('azure-v2/Item/Databases/ServiceManagedDatabase')
ServiceManagedDatabase('service_managed_database', 'Service Managed Database', 'an optional tech field')
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
' loads the ServiceManagedDatabase element
include('azure-v2/Item/Databases/ServiceManagedDatabase')
ServiceManagedDatabase('service_managed_database', 'Service Managed Database', 'an optional tech field')
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
' loads the ServiceManagedDatabase element
include('azure-v2/Item/Databases/ServiceManagedDatabase')
ServiceManagedDatabaseGroup('service_managed_database', 'Service Managed Database', 'an optional tech field'){
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
' loads the ServiceManagedDatabase element
include('azure-v2/Item/Databases/ServiceManagedDatabase')
ServiceManagedDatabaseGroup('service_managed_database', 'Service Managed Database', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

