# AwsServerMigrationService


```text
aws-q3-2021/Architecture/MigrationTransfer/AwsServerMigrationService
```

```text
include('aws-q3-2021/Architecture/MigrationTransfer/AwsServerMigrationService')
```



| Illustration | AwsServerMigrationService | AwsServerMigrationServiceCard | AwsServerMigrationServiceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/MigrationTransfer/AwsServerMigrationService.png) | ![illustration for AwsServerMigrationService](../../../aws-q3-2021/Architecture/MigrationTransfer/AwsServerMigrationService.Local.png) | ![illustration for AwsServerMigrationServiceCard](../../../aws-q3-2021/Architecture/MigrationTransfer/AwsServerMigrationServiceCard.Local.png) | ![illustration for AwsServerMigrationServiceGroup](../../../aws-q3-2021/Architecture/MigrationTransfer/AwsServerMigrationServiceGroup.Local.png) |




## AwsServerMigrationService

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsServerMigrationService
include('aws-q3-2021/Architecture/MigrationTransfer/AwsServerMigrationService')

' renders the element
AwsServerMigrationService('AwsServerMigrationService', 'Aws Server Migration Service', 'an optional tech label')
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

' loads the Item which embeds the element AwsServerMigrationService
include('aws-q3-2021/Architecture/MigrationTransfer/AwsServerMigrationService')

' renders the element
AwsServerMigrationService('AwsServerMigrationService', 'Aws Server Migration Service', 'an optional tech label')
@enduml
```

## AwsServerMigrationServiceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsServerMigrationServiceCard
include('aws-q3-2021/Architecture/MigrationTransfer/AwsServerMigrationService')

' renders the element
AwsServerMigrationServiceCard('AwsServerMigrationServiceCard', 'Aws Server Migration Service Card', 'an optional description')
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

' loads the Item which embeds the element AwsServerMigrationServiceCard
include('aws-q3-2021/Architecture/MigrationTransfer/AwsServerMigrationService')

' renders the element
AwsServerMigrationServiceCard('AwsServerMigrationServiceCard', 'Aws Server Migration Service Card', 'an optional description')
@enduml
```

## AwsServerMigrationServiceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsServerMigrationServiceGroup
include('aws-q3-2021/Architecture/MigrationTransfer/AwsServerMigrationService')

' renders the element
AwsServerMigrationServiceGroup('AwsServerMigrationServiceGroup', 'Aws Server Migration Service Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsServerMigrationServiceGroup
include('aws-q3-2021/Architecture/MigrationTransfer/AwsServerMigrationService')

' renders the element
AwsServerMigrationServiceGroup('AwsServerMigrationServiceGroup', 'Aws Server Migration Service Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

