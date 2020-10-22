# Aws Data Sync

```text
aws-20200430/Item/MigrationTransfer/AwsDataSync
```

```text
include('aws-20200430/Item/MigrationTransfer/AwsDataSync')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsDataSync.png)|![](AwsDataSync.card.png)|![](AwsDataSync.element.png)|![](AwsDataSync.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsDataSync element
include('aws-20200430/Item/MigrationTransfer/AwsDataSync')
AwsDataSyncCard('aws_data_sync', 'Aws Data Sync', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsDataSync element
include('aws-20200430/Item/MigrationTransfer/AwsDataSync')
AwsDataSyncCard('aws_data_sync', 'Aws Data Sync', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsDataSync element
include('aws-20200430/Item/MigrationTransfer/AwsDataSync')
AwsDataSync('aws_data_sync', 'Aws Data Sync', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsDataSync element
include('aws-20200430/Item/MigrationTransfer/AwsDataSync')
AwsDataSync('aws_data_sync', 'Aws Data Sync', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsDataSync element
include('aws-20200430/Item/MigrationTransfer/AwsDataSync')
AwsDataSyncGroup('aws_data_sync', 'Aws Data Sync', 'an optional tech field'){
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsDataSync element
include('aws-20200430/Item/MigrationTransfer/AwsDataSync')
AwsDataSyncGroup('aws_data_sync', 'Aws Data Sync', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

