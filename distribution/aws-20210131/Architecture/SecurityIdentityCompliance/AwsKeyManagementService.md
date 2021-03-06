# AwsKeyManagementService


```text
aws-20210131/Architecture/SecurityIdentityCompliance/AwsKeyManagementService
```

```text
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsKeyManagementService')
```



| Illustration | AwsKeyManagementService | AwsKeyManagementServiceCard | AwsKeyManagementServiceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/SecurityIdentityCompliance/AwsKeyManagementService.png) | ![illustration for AwsKeyManagementService](../../../aws-20210131/Architecture/SecurityIdentityCompliance/AwsKeyManagementService.Local.png) | ![illustration for AwsKeyManagementServiceCard](../../../aws-20210131/Architecture/SecurityIdentityCompliance/AwsKeyManagementServiceCard.Local.png) | ![illustration for AwsKeyManagementServiceGroup](../../../aws-20210131/Architecture/SecurityIdentityCompliance/AwsKeyManagementServiceGroup.Local.png) |




## AwsKeyManagementService

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsKeyManagementService
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsKeyManagementService')

' renders the element
AwsKeyManagementService('AwsKeyManagementService', 'Aws Key Management Service', 'an optional tech label')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsKeyManagementService
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsKeyManagementService')

' renders the element
AwsKeyManagementService('AwsKeyManagementService', 'Aws Key Management Service', 'an optional tech label')
@enduml
```

## AwsKeyManagementServiceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsKeyManagementServiceCard
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsKeyManagementService')

' renders the element
AwsKeyManagementServiceCard('AwsKeyManagementServiceCard', 'Aws Key Management Service Card', 'an optional description')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsKeyManagementServiceCard
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsKeyManagementService')

' renders the element
AwsKeyManagementServiceCard('AwsKeyManagementServiceCard', 'Aws Key Management Service Card', 'an optional description')
@enduml
```

## AwsKeyManagementServiceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsKeyManagementServiceGroup
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsKeyManagementService')

' renders the element
AwsKeyManagementServiceGroup('AwsKeyManagementServiceGroup', 'Aws Key Management Service Group', 'an optional tech label') {
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsKeyManagementServiceGroup
include('aws-20210131/Architecture/SecurityIdentityCompliance/AwsKeyManagementService')

' renders the element
AwsKeyManagementServiceGroup('AwsKeyManagementServiceGroup', 'Aws Key Management Service Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

