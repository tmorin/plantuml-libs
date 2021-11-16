# AwsDatabaseMigrationService


```text
aws-q3-2021/Architecture/Database/AwsDatabaseMigrationService
```

```text
include('aws-q3-2021/Architecture/Database/AwsDatabaseMigrationService')
```



| Illustration | AwsDatabaseMigrationService | AwsDatabaseMigrationServiceCard | AwsDatabaseMigrationServiceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/Database/AwsDatabaseMigrationService.png) | ![illustration for AwsDatabaseMigrationService](../../../aws-q3-2021/Architecture/Database/AwsDatabaseMigrationService.Local.png) | ![illustration for AwsDatabaseMigrationServiceCard](../../../aws-q3-2021/Architecture/Database/AwsDatabaseMigrationServiceCard.Local.png) | ![illustration for AwsDatabaseMigrationServiceGroup](../../../aws-q3-2021/Architecture/Database/AwsDatabaseMigrationServiceGroup.Local.png) |




## AwsDatabaseMigrationService

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsDatabaseMigrationService
include('aws-q3-2021/Architecture/Database/AwsDatabaseMigrationService')

' renders the element
AwsDatabaseMigrationService('AwsDatabaseMigrationService', 'Aws Database Migration Service', 'an optional tech label')
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

' loads the Item which embeds the element AwsDatabaseMigrationService
include('aws-q3-2021/Architecture/Database/AwsDatabaseMigrationService')

' renders the element
AwsDatabaseMigrationService('AwsDatabaseMigrationService', 'Aws Database Migration Service', 'an optional tech label')
@enduml
```

## AwsDatabaseMigrationServiceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsDatabaseMigrationServiceCard
include('aws-q3-2021/Architecture/Database/AwsDatabaseMigrationService')

' renders the element
AwsDatabaseMigrationServiceCard('AwsDatabaseMigrationServiceCard', 'Aws Database Migration Service Card', 'an optional description')
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

' loads the Item which embeds the element AwsDatabaseMigrationServiceCard
include('aws-q3-2021/Architecture/Database/AwsDatabaseMigrationService')

' renders the element
AwsDatabaseMigrationServiceCard('AwsDatabaseMigrationServiceCard', 'Aws Database Migration Service Card', 'an optional description')
@enduml
```

## AwsDatabaseMigrationServiceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsDatabaseMigrationServiceGroup
include('aws-q3-2021/Architecture/Database/AwsDatabaseMigrationService')

' renders the element
AwsDatabaseMigrationServiceGroup('AwsDatabaseMigrationServiceGroup', 'Aws Database Migration Service Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsDatabaseMigrationServiceGroup
include('aws-q3-2021/Architecture/Database/AwsDatabaseMigrationService')

' renders the element
AwsDatabaseMigrationServiceGroup('AwsDatabaseMigrationServiceGroup', 'Aws Database Migration Service Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

