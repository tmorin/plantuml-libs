# AwsOrganizationsManagementAccount


```text
aws-q1-2023/Resource/ManagementGovernance/AwsOrganizationsManagementAccount
```

```text
include('aws-q1-2023/Resource/ManagementGovernance/AwsOrganizationsManagementAccount')
```



| Illustration | AwsOrganizationsManagementAccount | AwsOrganizationsManagementAccountCard | AwsOrganizationsManagementAccountGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Resource/ManagementGovernance/AwsOrganizationsManagementAccount.png) | ![illustration for AwsOrganizationsManagementAccount](../../../aws-q1-2023/Resource/ManagementGovernance/AwsOrganizationsManagementAccount.Local.png) | ![illustration for AwsOrganizationsManagementAccountCard](../../../aws-q1-2023/Resource/ManagementGovernance/AwsOrganizationsManagementAccountCard.Local.png) | ![illustration for AwsOrganizationsManagementAccountGroup](../../../aws-q1-2023/Resource/ManagementGovernance/AwsOrganizationsManagementAccountGroup.Local.png) |




## AwsOrganizationsManagementAccount

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsOrganizationsManagementAccount
include('aws-q1-2023/Resource/ManagementGovernance/AwsOrganizationsManagementAccount')

' renders the element
AwsOrganizationsManagementAccount('AwsOrganizationsManagementAccount', 'Aws Organizations Management Account', 'an optional tech label', 'an optional description')
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsOrganizationsManagementAccount
include('aws-q1-2023/Resource/ManagementGovernance/AwsOrganizationsManagementAccount')

' renders the element
AwsOrganizationsManagementAccount('AwsOrganizationsManagementAccount', 'Aws Organizations Management Account', 'an optional tech label', 'an optional description')
@enduml
```

## AwsOrganizationsManagementAccountCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsOrganizationsManagementAccountCard
include('aws-q1-2023/Resource/ManagementGovernance/AwsOrganizationsManagementAccount')

' renders the element
AwsOrganizationsManagementAccountCard('AwsOrganizationsManagementAccountCard', 'Aws Organizations Management Account Card', 'an optional description')
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsOrganizationsManagementAccountCard
include('aws-q1-2023/Resource/ManagementGovernance/AwsOrganizationsManagementAccount')

' renders the element
AwsOrganizationsManagementAccountCard('AwsOrganizationsManagementAccountCard', 'Aws Organizations Management Account Card', 'an optional description')
@enduml
```

## AwsOrganizationsManagementAccountGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsOrganizationsManagementAccountGroup
include('aws-q1-2023/Resource/ManagementGovernance/AwsOrganizationsManagementAccount')

' renders the element
AwsOrganizationsManagementAccountGroup('AwsOrganizationsManagementAccountGroup', 'Aws Organizations Management Account Group', 'an optional tech label') {
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsOrganizationsManagementAccountGroup
include('aws-q1-2023/Resource/ManagementGovernance/AwsOrganizationsManagementAccount')

' renders the element
AwsOrganizationsManagementAccountGroup('AwsOrganizationsManagementAccountGroup', 'Aws Organizations Management Account Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

