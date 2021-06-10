# AwsBackup


```text
aws-20210131/Architecture/Storage/AwsBackup
```

```text
include('aws-20210131/Architecture/Storage/AwsBackup')
```



| Illustration | AwsBackup | AwsBackupCard | AwsBackupGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/Storage/AwsBackup.png) | ![illustration for AwsBackup](../../../aws-20210131/Architecture/Storage/AwsBackup.Local.png) | ![illustration for AwsBackupCard](../../../aws-20210131/Architecture/Storage/AwsBackupCard.Local.png) | ![illustration for AwsBackupGroup](../../../aws-20210131/Architecture/Storage/AwsBackupGroup.Local.png) |




## AwsBackup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsBackup
include('aws-20210131/Architecture/Storage/AwsBackup')

' renders the element
AwsBackup('AwsBackup', 'Aws Backup', 'an optional tech label')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsBackup
include('aws-20210131/Architecture/Storage/AwsBackup')

' renders the element
AwsBackup('AwsBackup', 'Aws Backup', 'an optional tech label')
@enduml
```

## AwsBackupCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsBackupCard
include('aws-20210131/Architecture/Storage/AwsBackup')

' renders the element
AwsBackupCard('AwsBackupCard', 'Aws Backup Card', 'an optional description')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsBackupCard
include('aws-20210131/Architecture/Storage/AwsBackup')

' renders the element
AwsBackupCard('AwsBackupCard', 'Aws Backup Card', 'an optional description')
@enduml
```

## AwsBackupGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsBackupGroup
include('aws-20210131/Architecture/Storage/AwsBackup')

' renders the element
AwsBackupGroup('AwsBackupGroup', 'Aws Backup Group', 'an optional tech label') {
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsBackupGroup
include('aws-20210131/Architecture/Storage/AwsBackup')

' renders the element
AwsBackupGroup('AwsBackupGroup', 'Aws Backup Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

