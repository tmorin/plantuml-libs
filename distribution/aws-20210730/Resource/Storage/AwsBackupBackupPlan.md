# AwsBackupBackupPlan


```text
aws-20210730/Resource/Storage/AwsBackupBackupPlan
```

```text
include('aws-20210730/Resource/Storage/AwsBackupBackupPlan')
```



| Illustration | AwsBackupBackupPlan | AwsBackupBackupPlanCard | AwsBackupBackupPlanGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Resource/Storage/AwsBackupBackupPlan.png) | ![illustration for AwsBackupBackupPlan](../../../aws-20210730/Resource/Storage/AwsBackupBackupPlan.Local.png) | ![illustration for AwsBackupBackupPlanCard](../../../aws-20210730/Resource/Storage/AwsBackupBackupPlanCard.Local.png) | ![illustration for AwsBackupBackupPlanGroup](../../../aws-20210730/Resource/Storage/AwsBackupBackupPlanGroup.Local.png) |




## AwsBackupBackupPlan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsBackupBackupPlan
include('aws-20210730/Resource/Storage/AwsBackupBackupPlan')

' renders the element
AwsBackupBackupPlan('AwsBackupBackupPlan', 'Aws Backup Backup Plan', 'an optional tech label')
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

' loads the Item which embeds the element AwsBackupBackupPlan
include('aws-20210730/Resource/Storage/AwsBackupBackupPlan')

' renders the element
AwsBackupBackupPlan('AwsBackupBackupPlan', 'Aws Backup Backup Plan', 'an optional tech label')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsBackupBackupPlanCard
include('aws-20210730/Resource/Storage/AwsBackupBackupPlan')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsBackupBackupPlanCard
include('aws-20210730/Resource/Storage/AwsBackupBackupPlan')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsBackupBackupPlanGroup
include('aws-20210730/Resource/Storage/AwsBackupBackupPlan')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsBackupBackupPlanGroup
include('aws-20210730/Resource/Storage/AwsBackupBackupPlan')

' renders the element
AwsBackupBackupPlanGroup('AwsBackupBackupPlanGroup', 'Aws Backup Backup Plan Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

