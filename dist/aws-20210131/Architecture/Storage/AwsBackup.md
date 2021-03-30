# Aws Backup

```text
aws-20210131/Architecture/Storage/AwsBackup
```

```text
include('aws-20210131/Architecture/Storage/AwsBackup')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsBackup.png)|![](AwsBackup.card.png)|![](AwsBackup.element.png)|![](AwsBackup.group.png)|



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
' loads the AwsBackup element
include('aws-20210131/Architecture/Storage/AwsBackup')
AwsBackupCard('aws_backup', 'Aws Backup', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsBackup element
include('aws-20210131/Architecture/Storage/AwsBackup')
AwsBackupCard('aws_backup', 'Aws Backup', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsBackup element
include('aws-20210131/Architecture/Storage/AwsBackup')
AwsBackup('aws_backup', 'Aws Backup', 'an optional tech field')
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
' loads the AwsBackup element
include('aws-20210131/Architecture/Storage/AwsBackup')
AwsBackup('aws_backup', 'Aws Backup', 'an optional tech field')
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
' loads the AwsBackup element
include('aws-20210131/Architecture/Storage/AwsBackup')
AwsBackupGroup('aws_backup', 'Aws Backup', 'an optional tech field'){
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
' loads the AwsBackup element
include('aws-20210131/Architecture/Storage/AwsBackup')
AwsBackupGroup('aws_backup', 'Aws Backup', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

