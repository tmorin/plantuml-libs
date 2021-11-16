# AwsLicenseManager


```text
aws-q3-2021/Architecture/ManagementGovernance/AwsLicenseManager
```

```text
include('aws-q3-2021/Architecture/ManagementGovernance/AwsLicenseManager')
```



| Illustration | AwsLicenseManager | AwsLicenseManagerCard | AwsLicenseManagerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/ManagementGovernance/AwsLicenseManager.png) | ![illustration for AwsLicenseManager](../../../aws-q3-2021/Architecture/ManagementGovernance/AwsLicenseManager.Local.png) | ![illustration for AwsLicenseManagerCard](../../../aws-q3-2021/Architecture/ManagementGovernance/AwsLicenseManagerCard.Local.png) | ![illustration for AwsLicenseManagerGroup](../../../aws-q3-2021/Architecture/ManagementGovernance/AwsLicenseManagerGroup.Local.png) |




## AwsLicenseManager

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsLicenseManager
include('aws-q3-2021/Architecture/ManagementGovernance/AwsLicenseManager')

' renders the element
AwsLicenseManager('AwsLicenseManager', 'Aws License Manager', 'an optional tech label')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsLicenseManager
include('aws-q3-2021/Architecture/ManagementGovernance/AwsLicenseManager')

' renders the element
AwsLicenseManager('AwsLicenseManager', 'Aws License Manager', 'an optional tech label')
@enduml
```

## AwsLicenseManagerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsLicenseManagerCard
include('aws-q3-2021/Architecture/ManagementGovernance/AwsLicenseManager')

' renders the element
AwsLicenseManagerCard('AwsLicenseManagerCard', 'Aws License Manager Card', 'an optional description')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsLicenseManagerCard
include('aws-q3-2021/Architecture/ManagementGovernance/AwsLicenseManager')

' renders the element
AwsLicenseManagerCard('AwsLicenseManagerCard', 'Aws License Manager Card', 'an optional description')
@enduml
```

## AwsLicenseManagerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsLicenseManagerGroup
include('aws-q3-2021/Architecture/ManagementGovernance/AwsLicenseManager')

' renders the element
AwsLicenseManagerGroup('AwsLicenseManagerGroup', 'Aws License Manager Group', 'an optional tech label') {
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsLicenseManagerGroup
include('aws-q3-2021/Architecture/ManagementGovernance/AwsLicenseManager')

' renders the element
AwsLicenseManagerGroup('AwsLicenseManagerGroup', 'Aws License Manager Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```
