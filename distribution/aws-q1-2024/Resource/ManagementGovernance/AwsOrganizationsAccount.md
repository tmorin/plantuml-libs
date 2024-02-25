# AwsOrganizationsAccount


```text
aws-q1-2024/Resource/ManagementGovernance/AwsOrganizationsAccount
```

```text
include('aws-q1-2024/Resource/ManagementGovernance/AwsOrganizationsAccount')
```



| Illustration | AwsOrganizationsAccount | AwsOrganizationsAccountCard | AwsOrganizationsAccountGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2024/Resource/ManagementGovernance/AwsOrganizationsAccount.png) | ![illustration for AwsOrganizationsAccount](../../../aws-q1-2024/Resource/ManagementGovernance/AwsOrganizationsAccount.Local.png) | ![illustration for AwsOrganizationsAccountCard](../../../aws-q1-2024/Resource/ManagementGovernance/AwsOrganizationsAccountCard.Local.png) | ![illustration for AwsOrganizationsAccountGroup](../../../aws-q1-2024/Resource/ManagementGovernance/AwsOrganizationsAccountGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsOrganizationsAccountXs>`
- `<$AwsOrganizationsAccountSm>`
- `<$AwsOrganizationsAccountMd>`
- `<$AwsOrganizationsAccountLg>`





## AwsOrganizationsAccount

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsOrganizationsAccount
include('aws-q1-2024/Resource/ManagementGovernance/AwsOrganizationsAccount')

' renders the element
AwsOrganizationsAccount('AwsOrganizationsAccount', 'Aws Organizations Account', 'an optional tech label', 'an optional description')
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsOrganizationsAccount
include('aws-q1-2024/Resource/ManagementGovernance/AwsOrganizationsAccount')

' renders the element
AwsOrganizationsAccount('AwsOrganizationsAccount', 'Aws Organizations Account', 'an optional tech label', 'an optional description')
@enduml
```

## AwsOrganizationsAccountCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsOrganizationsAccountCard
include('aws-q1-2024/Resource/ManagementGovernance/AwsOrganizationsAccount')

' renders the element
AwsOrganizationsAccountCard('AwsOrganizationsAccountCard', 'Aws Organizations Account Card', 'an optional description')
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsOrganizationsAccountCard
include('aws-q1-2024/Resource/ManagementGovernance/AwsOrganizationsAccount')

' renders the element
AwsOrganizationsAccountCard('AwsOrganizationsAccountCard', 'Aws Organizations Account Card', 'an optional description')
@enduml
```

## AwsOrganizationsAccountGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsOrganizationsAccountGroup
include('aws-q1-2024/Resource/ManagementGovernance/AwsOrganizationsAccount')

' renders the element
AwsOrganizationsAccountGroup('AwsOrganizationsAccountGroup', 'Aws Organizations Account Group', 'an optional tech label') {
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsOrganizationsAccountGroup
include('aws-q1-2024/Resource/ManagementGovernance/AwsOrganizationsAccount')

' renders the element
AwsOrganizationsAccountGroup('AwsOrganizationsAccountGroup', 'Aws Organizations Account Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

