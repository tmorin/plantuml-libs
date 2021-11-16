# AwsDataSync


```text
aws-q3-2021/Architecture/MigrationTransfer/AwsDataSync
```

```text
include('aws-q3-2021/Architecture/MigrationTransfer/AwsDataSync')
```



| Illustration | AwsDataSync | AwsDataSyncCard | AwsDataSyncGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/MigrationTransfer/AwsDataSync.png) | ![illustration for AwsDataSync](../../../aws-q3-2021/Architecture/MigrationTransfer/AwsDataSync.Local.png) | ![illustration for AwsDataSyncCard](../../../aws-q3-2021/Architecture/MigrationTransfer/AwsDataSyncCard.Local.png) | ![illustration for AwsDataSyncGroup](../../../aws-q3-2021/Architecture/MigrationTransfer/AwsDataSyncGroup.Local.png) |




## AwsDataSync

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsDataSync
include('aws-q3-2021/Architecture/MigrationTransfer/AwsDataSync')

' renders the element
AwsDataSync('AwsDataSync', 'Aws Data Sync', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsDataSync
include('aws-q3-2021/Architecture/MigrationTransfer/AwsDataSync')

' renders the element
AwsDataSync('AwsDataSync', 'Aws Data Sync', 'an optional tech label')
@enduml
```

## AwsDataSyncCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsDataSyncCard
include('aws-q3-2021/Architecture/MigrationTransfer/AwsDataSync')

' renders the element
AwsDataSyncCard('AwsDataSyncCard', 'Aws Data Sync Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsDataSyncCard
include('aws-q3-2021/Architecture/MigrationTransfer/AwsDataSync')

' renders the element
AwsDataSyncCard('AwsDataSyncCard', 'Aws Data Sync Card', 'an optional description')
@enduml
```

## AwsDataSyncGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsDataSyncGroup
include('aws-q3-2021/Architecture/MigrationTransfer/AwsDataSync')

' renders the element
AwsDataSyncGroup('AwsDataSyncGroup', 'Aws Data Sync Group', 'an optional tech label') {
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

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsDataSyncGroup
include('aws-q3-2021/Architecture/MigrationTransfer/AwsDataSync')

' renders the element
AwsDataSyncGroup('AwsDataSyncGroup', 'Aws Data Sync Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

