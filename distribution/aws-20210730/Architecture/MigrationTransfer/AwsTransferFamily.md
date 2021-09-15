# AwsTransferFamily


```text
aws-20210730/Architecture/MigrationTransfer/AwsTransferFamily
```

```text
include('aws-20210730/Architecture/MigrationTransfer/AwsTransferFamily')
```



| Illustration | AwsTransferFamily | AwsTransferFamilyCard | AwsTransferFamilyGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Architecture/MigrationTransfer/AwsTransferFamily.png) | ![illustration for AwsTransferFamily](../../../aws-20210730/Architecture/MigrationTransfer/AwsTransferFamily.Local.png) | ![illustration for AwsTransferFamilyCard](../../../aws-20210730/Architecture/MigrationTransfer/AwsTransferFamilyCard.Local.png) | ![illustration for AwsTransferFamilyGroup](../../../aws-20210730/Architecture/MigrationTransfer/AwsTransferFamilyGroup.Local.png) |




## AwsTransferFamily

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsTransferFamily
include('aws-20210730/Architecture/MigrationTransfer/AwsTransferFamily')

' renders the element
AwsTransferFamily('AwsTransferFamily', 'Aws Transfer Family', 'an optional tech label')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsTransferFamily
include('aws-20210730/Architecture/MigrationTransfer/AwsTransferFamily')

' renders the element
AwsTransferFamily('AwsTransferFamily', 'Aws Transfer Family', 'an optional tech label')
@enduml
```

## AwsTransferFamilyCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsTransferFamilyCard
include('aws-20210730/Architecture/MigrationTransfer/AwsTransferFamily')

' renders the element
AwsTransferFamilyCard('AwsTransferFamilyCard', 'Aws Transfer Family Card', 'an optional description')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsTransferFamilyCard
include('aws-20210730/Architecture/MigrationTransfer/AwsTransferFamily')

' renders the element
AwsTransferFamilyCard('AwsTransferFamilyCard', 'Aws Transfer Family Card', 'an optional description')
@enduml
```

## AwsTransferFamilyGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsTransferFamilyGroup
include('aws-20210730/Architecture/MigrationTransfer/AwsTransferFamily')

' renders the element
AwsTransferFamilyGroup('AwsTransferFamilyGroup', 'Aws Transfer Family Group', 'an optional tech label') {
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsTransferFamilyGroup
include('aws-20210730/Architecture/MigrationTransfer/AwsTransferFamily')

' renders the element
AwsTransferFamilyGroup('AwsTransferFamilyGroup', 'Aws Transfer Family Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

