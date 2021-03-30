# Cloud Endure Migration

```text
aws-20210131/Architecture/MigrationTransfer/CloudEndureMigration
```

```text
include('aws-20210131/Architecture/MigrationTransfer/CloudEndureMigration')
```

|icon|card|element|group|
|---|---|---|---|
|![](CloudEndureMigration.png)|![](CloudEndureMigration.card.png)|![](CloudEndureMigration.element.png)|![](CloudEndureMigration.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the CloudEndureMigration element
include('aws-20210131/Architecture/MigrationTransfer/CloudEndureMigration')
CloudEndureMigrationCard('cloud_endure_migration', 'Cloud Endure Migration', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the CloudEndureMigration element
include('aws-20210131/Architecture/MigrationTransfer/CloudEndureMigration')
CloudEndureMigrationCard('cloud_endure_migration', 'Cloud Endure Migration', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the CloudEndureMigration element
include('aws-20210131/Architecture/MigrationTransfer/CloudEndureMigration')
CloudEndureMigration('cloud_endure_migration', 'Cloud Endure Migration', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the CloudEndureMigration element
include('aws-20210131/Architecture/MigrationTransfer/CloudEndureMigration')
CloudEndureMigration('cloud_endure_migration', 'Cloud Endure Migration', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the CloudEndureMigration element
include('aws-20210131/Architecture/MigrationTransfer/CloudEndureMigration')
CloudEndureMigrationGroup('cloud_endure_migration', 'Cloud Endure Migration', 'an optional tech field'){
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the CloudEndureMigration element
include('aws-20210131/Architecture/MigrationTransfer/CloudEndureMigration')
CloudEndureMigrationGroup('cloud_endure_migration', 'Cloud Endure Migration', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

