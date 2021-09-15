# MigrationTransfer


```text
aws-20210730/Category/MigrationTransfer
```

```text
include('aws-20210730/Category/MigrationTransfer')
```



| Illustration | MigrationTransfer | MigrationTransferCard | MigrationTransferGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws-20210730/Category/MigrationTransfer.png) | ![illustration for MigrationTransfer](../../aws-20210730/Category/MigrationTransfer.Local.png) | ![illustration for MigrationTransferCard](../../aws-20210730/Category/MigrationTransferCard.Local.png) | ![illustration for MigrationTransferGroup](../../aws-20210730/Category/MigrationTransferGroup.Local.png) |




## MigrationTransfer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element MigrationTransfer
include('aws-20210730/Category/MigrationTransfer')

' renders the element
MigrationTransfer('MigrationTransfer', 'Migration Transfer', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element MigrationTransfer
include('aws-20210730/Category/MigrationTransfer')

' renders the element
MigrationTransfer('MigrationTransfer', 'Migration Transfer', 'an optional tech label')
@enduml
```

## MigrationTransferCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element MigrationTransferCard
include('aws-20210730/Category/MigrationTransfer')

' renders the element
MigrationTransferCard('MigrationTransferCard', 'Migration Transfer Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element MigrationTransferCard
include('aws-20210730/Category/MigrationTransfer')

' renders the element
MigrationTransferCard('MigrationTransferCard', 'Migration Transfer Card', 'an optional description')
@enduml
```

## MigrationTransferGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element MigrationTransferGroup
include('aws-20210730/Category/MigrationTransfer')

' renders the element
MigrationTransferGroup('MigrationTransferGroup', 'Migration Transfer Group', 'an optional tech label') {
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
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element MigrationTransferGroup
include('aws-20210730/Category/MigrationTransfer')

' renders the element
MigrationTransferGroup('MigrationTransferGroup', 'Migration Transfer Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

