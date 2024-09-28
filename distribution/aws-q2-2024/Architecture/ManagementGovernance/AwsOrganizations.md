# AwsOrganizations


```text
aws-q2-2024/Architecture/ManagementGovernance/AwsOrganizations
```

```text
include('aws-q2-2024/Architecture/ManagementGovernance/AwsOrganizations')
```



| Illustration | AwsOrganizations | AwsOrganizationsCard | AwsOrganizationsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2024/Architecture/ManagementGovernance/AwsOrganizations.png) | ![illustration for AwsOrganizations](../../../aws-q2-2024/Architecture/ManagementGovernance/AwsOrganizations.Local.png) | ![illustration for AwsOrganizationsCard](../../../aws-q2-2024/Architecture/ManagementGovernance/AwsOrganizationsCard.Local.png) | ![illustration for AwsOrganizationsGroup](../../../aws-q2-2024/Architecture/ManagementGovernance/AwsOrganizationsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsOrganizationsXs>`
- `<$AwsOrganizationsSm>`
- `<$AwsOrganizationsMd>`
- `<$AwsOrganizationsLg>`





## AwsOrganizations

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsOrganizations
include('aws-q2-2024/Architecture/ManagementGovernance/AwsOrganizations')

' renders the element
AwsOrganizations('AwsOrganizations', 'Aws Organizations', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsOrganizations
include('aws-q2-2024/Architecture/ManagementGovernance/AwsOrganizations')

' renders the element
AwsOrganizations('AwsOrganizations', 'Aws Organizations', 'an optional tech label', 'an optional description')
@enduml
```

## AwsOrganizationsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsOrganizationsCard
include('aws-q2-2024/Architecture/ManagementGovernance/AwsOrganizations')

' renders the element
AwsOrganizationsCard('AwsOrganizationsCard', 'Aws Organizations Card', 'an optional description')
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

' loads the Item which embeds the element AwsOrganizationsCard
include('aws-q2-2024/Architecture/ManagementGovernance/AwsOrganizations')

' renders the element
AwsOrganizationsCard('AwsOrganizationsCard', 'Aws Organizations Card', 'an optional description')
@enduml
```

## AwsOrganizationsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsOrganizationsGroup
include('aws-q2-2024/Architecture/ManagementGovernance/AwsOrganizations')

' renders the element
AwsOrganizationsGroup('AwsOrganizationsGroup', 'Aws Organizations Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsOrganizationsGroup
include('aws-q2-2024/Architecture/ManagementGovernance/AwsOrganizations')

' renders the element
AwsOrganizationsGroup('AwsOrganizationsGroup', 'Aws Organizations Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

