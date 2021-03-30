# Aws Migration Hub

```text
aws-20210131/Architecture/MigrationTransfer/AwsMigrationHub
```

```text
include('aws-20210131/Architecture/MigrationTransfer/AwsMigrationHub')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsMigrationHub.png)|![](AwsMigrationHub.card.png)|![](AwsMigrationHub.element.png)|![](AwsMigrationHub.group.png)|



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
' loads the AwsMigrationHub element
include('aws-20210131/Architecture/MigrationTransfer/AwsMigrationHub')
AwsMigrationHubCard('aws_migration_hub', 'Aws Migration Hub', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsMigrationHub element
include('aws-20210131/Architecture/MigrationTransfer/AwsMigrationHub')
AwsMigrationHubCard('aws_migration_hub', 'Aws Migration Hub', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsMigrationHub element
include('aws-20210131/Architecture/MigrationTransfer/AwsMigrationHub')
AwsMigrationHub('aws_migration_hub', 'Aws Migration Hub', 'an optional tech field')
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
' loads the AwsMigrationHub element
include('aws-20210131/Architecture/MigrationTransfer/AwsMigrationHub')
AwsMigrationHub('aws_migration_hub', 'Aws Migration Hub', 'an optional tech field')
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
' loads the AwsMigrationHub element
include('aws-20210131/Architecture/MigrationTransfer/AwsMigrationHub')
AwsMigrationHubGroup('aws_migration_hub', 'Aws Migration Hub', 'an optional tech field'){
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
' loads the AwsMigrationHub element
include('aws-20210131/Architecture/MigrationTransfer/AwsMigrationHub')
AwsMigrationHubGroup('aws_migration_hub', 'Aws Migration Hub', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

