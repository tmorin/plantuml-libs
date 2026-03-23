# AwsSecretsManager


```text
aws/Architecture/SecurityIdentityCompliance/AwsSecretsManager
```

```text
include('aws/Architecture/SecurityIdentityCompliance/AwsSecretsManager')
```



| Illustration | AwsSecretsManager | AwsSecretsManagerCard | AwsSecretsManagerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Architecture/SecurityIdentityCompliance/AwsSecretsManager.png) | ![illustration for AwsSecretsManager](../../../aws/Architecture/SecurityIdentityCompliance/AwsSecretsManager.Local.png) | ![illustration for AwsSecretsManagerCard](../../../aws/Architecture/SecurityIdentityCompliance/AwsSecretsManagerCard.Local.png) | ![illustration for AwsSecretsManagerGroup](../../../aws/Architecture/SecurityIdentityCompliance/AwsSecretsManagerGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsSecretsManagerXs>`
- `<$AwsSecretsManagerSm>`
- `<$AwsSecretsManagerMd>`
- `<$AwsSecretsManagerLg>`





## AwsSecretsManager

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsSecretsManager
include('aws/Architecture/SecurityIdentityCompliance/AwsSecretsManager')

' renders the element
AwsSecretsManager('AwsSecretsManager', 'Aws Secrets Manager', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsSecretsManager
include('aws/Architecture/SecurityIdentityCompliance/AwsSecretsManager')

' renders the element
AwsSecretsManager('AwsSecretsManager', 'Aws Secrets Manager', 'an optional tech label', 'an optional description')
@enduml
```

## AwsSecretsManagerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsSecretsManagerCard
include('aws/Architecture/SecurityIdentityCompliance/AwsSecretsManager')

' renders the element
AwsSecretsManagerCard('AwsSecretsManagerCard', 'Aws Secrets Manager Card', 'an optional description')
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

' loads the Item which embeds the element AwsSecretsManagerCard
include('aws/Architecture/SecurityIdentityCompliance/AwsSecretsManager')

' renders the element
AwsSecretsManagerCard('AwsSecretsManagerCard', 'Aws Secrets Manager Card', 'an optional description')
@enduml
```

## AwsSecretsManagerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsSecretsManagerGroup
include('aws/Architecture/SecurityIdentityCompliance/AwsSecretsManager')

' renders the element
AwsSecretsManagerGroup('AwsSecretsManagerGroup', 'Aws Secrets Manager Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsSecretsManagerGroup
include('aws/Architecture/SecurityIdentityCompliance/AwsSecretsManager')

' renders the element
AwsSecretsManagerGroup('AwsSecretsManagerGroup', 'Aws Secrets Manager Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

