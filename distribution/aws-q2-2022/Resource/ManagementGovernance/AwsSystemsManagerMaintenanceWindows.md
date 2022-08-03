# AwsSystemsManagerMaintenanceWindows


```text
aws-q2-2022/Resource/ManagementGovernance/AwsSystemsManagerMaintenanceWindows
```

```text
include('aws-q2-2022/Resource/ManagementGovernance/AwsSystemsManagerMaintenanceWindows')
```



| Illustration | AwsSystemsManagerMaintenanceWindows | AwsSystemsManagerMaintenanceWindowsCard | AwsSystemsManagerMaintenanceWindowsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2022/Resource/ManagementGovernance/AwsSystemsManagerMaintenanceWindows.png) | ![illustration for AwsSystemsManagerMaintenanceWindows](../../../aws-q2-2022/Resource/ManagementGovernance/AwsSystemsManagerMaintenanceWindows.Local.png) | ![illustration for AwsSystemsManagerMaintenanceWindowsCard](../../../aws-q2-2022/Resource/ManagementGovernance/AwsSystemsManagerMaintenanceWindowsCard.Local.png) | ![illustration for AwsSystemsManagerMaintenanceWindowsGroup](../../../aws-q2-2022/Resource/ManagementGovernance/AwsSystemsManagerMaintenanceWindowsGroup.Local.png) |




## AwsSystemsManagerMaintenanceWindows

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerMaintenanceWindows
include('aws-q2-2022/Resource/ManagementGovernance/AwsSystemsManagerMaintenanceWindows')

' renders the element
AwsSystemsManagerMaintenanceWindows('AwsSystemsManagerMaintenanceWindows', 'Aws Systems Manager Maintenance Windows', 'an optional tech label', 'an optional description')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerMaintenanceWindows
include('aws-q2-2022/Resource/ManagementGovernance/AwsSystemsManagerMaintenanceWindows')

' renders the element
AwsSystemsManagerMaintenanceWindows('AwsSystemsManagerMaintenanceWindows', 'Aws Systems Manager Maintenance Windows', 'an optional tech label', 'an optional description')
@enduml
```

## AwsSystemsManagerMaintenanceWindowsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerMaintenanceWindowsCard
include('aws-q2-2022/Resource/ManagementGovernance/AwsSystemsManagerMaintenanceWindows')

' renders the element
AwsSystemsManagerMaintenanceWindowsCard('AwsSystemsManagerMaintenanceWindowsCard', 'Aws Systems Manager Maintenance Windows Card', 'an optional description')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerMaintenanceWindowsCard
include('aws-q2-2022/Resource/ManagementGovernance/AwsSystemsManagerMaintenanceWindows')

' renders the element
AwsSystemsManagerMaintenanceWindowsCard('AwsSystemsManagerMaintenanceWindowsCard', 'Aws Systems Manager Maintenance Windows Card', 'an optional description')
@enduml
```

## AwsSystemsManagerMaintenanceWindowsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerMaintenanceWindowsGroup
include('aws-q2-2022/Resource/ManagementGovernance/AwsSystemsManagerMaintenanceWindows')

' renders the element
AwsSystemsManagerMaintenanceWindowsGroup('AwsSystemsManagerMaintenanceWindowsGroup', 'Aws Systems Manager Maintenance Windows Group', 'an optional tech label') {
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerMaintenanceWindowsGroup
include('aws-q2-2022/Resource/ManagementGovernance/AwsSystemsManagerMaintenanceWindows')

' renders the element
AwsSystemsManagerMaintenanceWindowsGroup('AwsSystemsManagerMaintenanceWindowsGroup', 'Aws Systems Manager Maintenance Windows Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

