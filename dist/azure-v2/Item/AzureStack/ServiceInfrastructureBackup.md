# Service Infrastructure Backup

```text
azure-v2/Item/AzureStack/ServiceInfrastructureBackup
```

```text
include('azure-v2/Item/AzureStack/ServiceInfrastructureBackup')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceInfrastructureBackup.png)|![](ServiceInfrastructureBackup.card.png)|![](ServiceInfrastructureBackup.element.png)|![](ServiceInfrastructureBackup.group.png)|



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
' loads the ServiceInfrastructureBackup element
include('azure-v2/Item/AzureStack/ServiceInfrastructureBackup')
ServiceInfrastructureBackupCard('service_infrastructure_backup', 'Service Infrastructure Backup', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceInfrastructureBackup element
include('azure-v2/Item/AzureStack/ServiceInfrastructureBackup')
ServiceInfrastructureBackupCard('service_infrastructure_backup', 'Service Infrastructure Backup', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceInfrastructureBackup element
include('azure-v2/Item/AzureStack/ServiceInfrastructureBackup')
ServiceInfrastructureBackup('service_infrastructure_backup', 'Service Infrastructure Backup', 'an optional tech field')
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
' loads the ServiceInfrastructureBackup element
include('azure-v2/Item/AzureStack/ServiceInfrastructureBackup')
ServiceInfrastructureBackup('service_infrastructure_backup', 'Service Infrastructure Backup', 'an optional tech field')
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
' loads the ServiceInfrastructureBackup element
include('azure-v2/Item/AzureStack/ServiceInfrastructureBackup')
ServiceInfrastructureBackupGroup('service_infrastructure_backup', 'Service Infrastructure Backup', 'an optional tech field'){
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
' loads the ServiceInfrastructureBackup element
include('azure-v2/Item/AzureStack/ServiceInfrastructureBackup')
ServiceInfrastructureBackupGroup('service_infrastructure_backup', 'Service Infrastructure Backup', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

