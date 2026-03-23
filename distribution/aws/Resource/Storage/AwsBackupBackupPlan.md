# AwsBackupBackupPlan


```text
aws/Resource/Storage/AwsBackupBackupPlan
```

```text
include('aws/Resource/Storage/AwsBackupBackupPlan')
```



| Illustration | AwsBackupBackupPlan | AwsBackupBackupPlanCard | AwsBackupBackupPlanGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Resource/Storage/AwsBackupBackupPlan.png) | ![illustration for AwsBackupBackupPlan](../../../aws/Resource/Storage/AwsBackupBackupPlan.Local.png) | ![illustration for AwsBackupBackupPlanCard](../../../aws/Resource/Storage/AwsBackupBackupPlanCard.Local.png) | ![illustration for AwsBackupBackupPlanGroup](../../../aws/Resource/Storage/AwsBackupBackupPlanGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsBackupBackupPlanXs>`
- `<$AwsBackupBackupPlanSm>`
- `<$AwsBackupBackupPlanMd>`
- `<$AwsBackupBackupPlanLg>`





## AwsBackupBackupPlan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsBackupBackupPlan
include('aws/Resource/Storage/AwsBackupBackupPlan')

' renders the element
AwsBackupBackupPlan('AwsBackupBackupPlan', 'Aws Backup Backup Plan', 'an optional tech label', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AwsBackupBackupPlan
include('aws/Resource/Storage/AwsBackupBackupPlan')

' renders the element
AwsBackupBackupPlan('AwsBackupBackupPlan', 'Aws Backup Backup Plan', 'an optional tech label', 'an optional description')
@enduml
```

## AwsBackupBackupPlanCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsBackupBackupPlanCard
include('aws/Resource/Storage/AwsBackupBackupPlan')

' renders the element
AwsBackupBackupPlanCard('AwsBackupBackupPlanCard', 'Aws Backup Backup Plan Card', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AwsBackupBackupPlanCard
include('aws/Resource/Storage/AwsBackupBackupPlan')

' renders the element
AwsBackupBackupPlanCard('AwsBackupBackupPlanCard', 'Aws Backup Backup Plan Card', 'an optional description')
@enduml
```

## AwsBackupBackupPlanGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsBackupBackupPlanGroup
include('aws/Resource/Storage/AwsBackupBackupPlan')

' renders the element
AwsBackupBackupPlanGroup('AwsBackupBackupPlanGroup', 'Aws Backup Backup Plan Group', 'an optional tech label') {
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
include('aws/bootstrap')

' loads the Item which embeds the element AwsBackupBackupPlanGroup
include('aws/Resource/Storage/AwsBackupBackupPlan')

' renders the element
AwsBackupBackupPlanGroup('AwsBackupBackupPlanGroup', 'Aws Backup Backup Plan Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

