# AwsApplicationMigrationService


```text
aws-q3-2021/Architecture/MigrationTransfer/AwsApplicationMigrationService
```

```text
include('aws-q3-2021/Architecture/MigrationTransfer/AwsApplicationMigrationService')
```



| Illustration | AwsApplicationMigrationService | AwsApplicationMigrationServiceCard | AwsApplicationMigrationServiceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/MigrationTransfer/AwsApplicationMigrationService.png) | ![illustration for AwsApplicationMigrationService](../../../aws-q3-2021/Architecture/MigrationTransfer/AwsApplicationMigrationService.Local.png) | ![illustration for AwsApplicationMigrationServiceCard](../../../aws-q3-2021/Architecture/MigrationTransfer/AwsApplicationMigrationServiceCard.Local.png) | ![illustration for AwsApplicationMigrationServiceGroup](../../../aws-q3-2021/Architecture/MigrationTransfer/AwsApplicationMigrationServiceGroup.Local.png) |




## AwsApplicationMigrationService

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsApplicationMigrationService
include('aws-q3-2021/Architecture/MigrationTransfer/AwsApplicationMigrationService')

' renders the element
AwsApplicationMigrationService('AwsApplicationMigrationService', 'Aws Application Migration Service', 'an optional tech label')
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

' loads the Item which embeds the element AwsApplicationMigrationService
include('aws-q3-2021/Architecture/MigrationTransfer/AwsApplicationMigrationService')

' renders the element
AwsApplicationMigrationService('AwsApplicationMigrationService', 'Aws Application Migration Service', 'an optional tech label')
@enduml
```

## AwsApplicationMigrationServiceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsApplicationMigrationServiceCard
include('aws-q3-2021/Architecture/MigrationTransfer/AwsApplicationMigrationService')

' renders the element
AwsApplicationMigrationServiceCard('AwsApplicationMigrationServiceCard', 'Aws Application Migration Service Card', 'an optional description')
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

' loads the Item which embeds the element AwsApplicationMigrationServiceCard
include('aws-q3-2021/Architecture/MigrationTransfer/AwsApplicationMigrationService')

' renders the element
AwsApplicationMigrationServiceCard('AwsApplicationMigrationServiceCard', 'Aws Application Migration Service Card', 'an optional description')
@enduml
```

## AwsApplicationMigrationServiceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsApplicationMigrationServiceGroup
include('aws-q3-2021/Architecture/MigrationTransfer/AwsApplicationMigrationService')

' renders the element
AwsApplicationMigrationServiceGroup('AwsApplicationMigrationServiceGroup', 'Aws Application Migration Service Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsApplicationMigrationServiceGroup
include('aws-q3-2021/Architecture/MigrationTransfer/AwsApplicationMigrationService')

' renders the element
AwsApplicationMigrationServiceGroup('AwsApplicationMigrationServiceGroup', 'Aws Application Migration Service Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

