# AwsBackupBackupVault


```text
aws-20210730/Resource/Storage/AwsBackupBackupVault
```

```text
include('aws-20210730/Resource/Storage/AwsBackupBackupVault')
```



| Illustration | AwsBackupBackupVault | AwsBackupBackupVaultCard | AwsBackupBackupVaultGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Resource/Storage/AwsBackupBackupVault.png) | ![illustration for AwsBackupBackupVault](../../../aws-20210730/Resource/Storage/AwsBackupBackupVault.Local.png) | ![illustration for AwsBackupBackupVaultCard](../../../aws-20210730/Resource/Storage/AwsBackupBackupVaultCard.Local.png) | ![illustration for AwsBackupBackupVaultGroup](../../../aws-20210730/Resource/Storage/AwsBackupBackupVaultGroup.Local.png) |




## AwsBackupBackupVault

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsBackupBackupVault
include('aws-20210730/Resource/Storage/AwsBackupBackupVault')

' renders the element
AwsBackupBackupVault('AwsBackupBackupVault', 'Aws Backup Backup Vault', 'an optional tech label')
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

' loads the Item which embeds the element AwsBackupBackupVault
include('aws-20210730/Resource/Storage/AwsBackupBackupVault')

' renders the element
AwsBackupBackupVault('AwsBackupBackupVault', 'Aws Backup Backup Vault', 'an optional tech label')
@enduml
```

## AwsBackupBackupVaultCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsBackupBackupVaultCard
include('aws-20210730/Resource/Storage/AwsBackupBackupVault')

' renders the element
AwsBackupBackupVaultCard('AwsBackupBackupVaultCard', 'Aws Backup Backup Vault Card', 'an optional description')
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

' loads the Item which embeds the element AwsBackupBackupVaultCard
include('aws-20210730/Resource/Storage/AwsBackupBackupVault')

' renders the element
AwsBackupBackupVaultCard('AwsBackupBackupVaultCard', 'Aws Backup Backup Vault Card', 'an optional description')
@enduml
```

## AwsBackupBackupVaultGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsBackupBackupVaultGroup
include('aws-20210730/Resource/Storage/AwsBackupBackupVault')

' renders the element
AwsBackupBackupVaultGroup('AwsBackupBackupVaultGroup', 'Aws Backup Backup Vault Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsBackupBackupVaultGroup
include('aws-20210730/Resource/Storage/AwsBackupBackupVault')

' renders the element
AwsBackupBackupVaultGroup('AwsBackupBackupVaultGroup', 'Aws Backup Backup Vault Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

