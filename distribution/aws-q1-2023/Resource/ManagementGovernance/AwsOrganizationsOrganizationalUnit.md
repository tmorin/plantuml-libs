# AwsOrganizationsOrganizationalUnit


```text
aws-q1-2023/Resource/ManagementGovernance/AwsOrganizationsOrganizationalUnit
```

```text
include('aws-q1-2023/Resource/ManagementGovernance/AwsOrganizationsOrganizationalUnit')
```



| Illustration | AwsOrganizationsOrganizationalUnit | AwsOrganizationsOrganizationalUnitCard | AwsOrganizationsOrganizationalUnitGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Resource/ManagementGovernance/AwsOrganizationsOrganizationalUnit.png) | ![illustration for AwsOrganizationsOrganizationalUnit](../../../aws-q1-2023/Resource/ManagementGovernance/AwsOrganizationsOrganizationalUnit.Local.png) | ![illustration for AwsOrganizationsOrganizationalUnitCard](../../../aws-q1-2023/Resource/ManagementGovernance/AwsOrganizationsOrganizationalUnitCard.Local.png) | ![illustration for AwsOrganizationsOrganizationalUnitGroup](../../../aws-q1-2023/Resource/ManagementGovernance/AwsOrganizationsOrganizationalUnitGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsOrganizationsOrganizationalUnitXs>`
- `<$AwsOrganizationsOrganizationalUnitSm>`
- `<$AwsOrganizationsOrganizationalUnitMd>`
- `<$AwsOrganizationsOrganizationalUnitLg>`





## AwsOrganizationsOrganizationalUnit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsOrganizationsOrganizationalUnit
include('aws-q1-2023/Resource/ManagementGovernance/AwsOrganizationsOrganizationalUnit')

' renders the element
AwsOrganizationsOrganizationalUnit('AwsOrganizationsOrganizationalUnit', 'Aws Organizations Organizational Unit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsOrganizationsOrganizationalUnit
include('aws-q1-2023/Resource/ManagementGovernance/AwsOrganizationsOrganizationalUnit')

' renders the element
AwsOrganizationsOrganizationalUnit('AwsOrganizationsOrganizationalUnit', 'Aws Organizations Organizational Unit', 'an optional tech label', 'an optional description')
@enduml
```

## AwsOrganizationsOrganizationalUnitCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsOrganizationsOrganizationalUnitCard
include('aws-q1-2023/Resource/ManagementGovernance/AwsOrganizationsOrganizationalUnit')

' renders the element
AwsOrganizationsOrganizationalUnitCard('AwsOrganizationsOrganizationalUnitCard', 'Aws Organizations Organizational Unit Card', 'an optional description')
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

' loads the Item which embeds the element AwsOrganizationsOrganizationalUnitCard
include('aws-q1-2023/Resource/ManagementGovernance/AwsOrganizationsOrganizationalUnit')

' renders the element
AwsOrganizationsOrganizationalUnitCard('AwsOrganizationsOrganizationalUnitCard', 'Aws Organizations Organizational Unit Card', 'an optional description')
@enduml
```

## AwsOrganizationsOrganizationalUnitGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsOrganizationsOrganizationalUnitGroup
include('aws-q1-2023/Resource/ManagementGovernance/AwsOrganizationsOrganizationalUnit')

' renders the element
AwsOrganizationsOrganizationalUnitGroup('AwsOrganizationsOrganizationalUnitGroup', 'Aws Organizations Organizational Unit Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsOrganizationsOrganizationalUnitGroup
include('aws-q1-2023/Resource/ManagementGovernance/AwsOrganizationsOrganizationalUnit')

' renders the element
AwsOrganizationsOrganizationalUnitGroup('AwsOrganizationsOrganizationalUnitGroup', 'Aws Organizations Organizational Unit Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

