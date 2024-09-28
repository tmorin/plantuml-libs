# AwsTransferFamily


```text
aws-q2-2024/Architecture/MigrationModernization/AwsTransferFamily
```

```text
include('aws-q2-2024/Architecture/MigrationModernization/AwsTransferFamily')
```



| Illustration | AwsTransferFamily | AwsTransferFamilyCard | AwsTransferFamilyGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2024/Architecture/MigrationModernization/AwsTransferFamily.png) | ![illustration for AwsTransferFamily](../../../aws-q2-2024/Architecture/MigrationModernization/AwsTransferFamily.Local.png) | ![illustration for AwsTransferFamilyCard](../../../aws-q2-2024/Architecture/MigrationModernization/AwsTransferFamilyCard.Local.png) | ![illustration for AwsTransferFamilyGroup](../../../aws-q2-2024/Architecture/MigrationModernization/AwsTransferFamilyGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsTransferFamilyXs>`
- `<$AwsTransferFamilySm>`
- `<$AwsTransferFamilyMd>`
- `<$AwsTransferFamilyLg>`





## AwsTransferFamily

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsTransferFamily
include('aws-q2-2024/Architecture/MigrationModernization/AwsTransferFamily')

' renders the element
AwsTransferFamily('AwsTransferFamily', 'Aws Transfer Family', 'an optional tech label', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsTransferFamily
include('aws-q2-2024/Architecture/MigrationModernization/AwsTransferFamily')

' renders the element
AwsTransferFamily('AwsTransferFamily', 'Aws Transfer Family', 'an optional tech label', 'an optional description')
@enduml
```

## AwsTransferFamilyCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsTransferFamilyCard
include('aws-q2-2024/Architecture/MigrationModernization/AwsTransferFamily')

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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsTransferFamilyCard
include('aws-q2-2024/Architecture/MigrationModernization/AwsTransferFamily')

' renders the element
AwsTransferFamilyCard('AwsTransferFamilyCard', 'Aws Transfer Family Card', 'an optional description')
@enduml
```

## AwsTransferFamilyGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsTransferFamilyGroup
include('aws-q2-2024/Architecture/MigrationModernization/AwsTransferFamily')

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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsTransferFamilyGroup
include('aws-q2-2024/Architecture/MigrationModernization/AwsTransferFamily')

' renders the element
AwsTransferFamilyGroup('AwsTransferFamilyGroup', 'Aws Transfer Family Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

