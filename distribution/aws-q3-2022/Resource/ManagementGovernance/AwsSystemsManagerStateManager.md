# AwsSystemsManagerStateManager


```text
aws-q3-2022/Resource/ManagementGovernance/AwsSystemsManagerStateManager
```

```text
include('aws-q3-2022/Resource/ManagementGovernance/AwsSystemsManagerStateManager')
```



| Illustration | AwsSystemsManagerStateManager | AwsSystemsManagerStateManagerCard | AwsSystemsManagerStateManagerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2022/Resource/ManagementGovernance/AwsSystemsManagerStateManager.png) | ![illustration for AwsSystemsManagerStateManager](../../../aws-q3-2022/Resource/ManagementGovernance/AwsSystemsManagerStateManager.Local.png) | ![illustration for AwsSystemsManagerStateManagerCard](../../../aws-q3-2022/Resource/ManagementGovernance/AwsSystemsManagerStateManagerCard.Local.png) | ![illustration for AwsSystemsManagerStateManagerGroup](../../../aws-q3-2022/Resource/ManagementGovernance/AwsSystemsManagerStateManagerGroup.Local.png) |




## AwsSystemsManagerStateManager

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerStateManager
include('aws-q3-2022/Resource/ManagementGovernance/AwsSystemsManagerStateManager')

' renders the element
AwsSystemsManagerStateManager('AwsSystemsManagerStateManager', 'Aws Systems Manager State Manager', 'an optional tech label', 'an optional description')
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerStateManager
include('aws-q3-2022/Resource/ManagementGovernance/AwsSystemsManagerStateManager')

' renders the element
AwsSystemsManagerStateManager('AwsSystemsManagerStateManager', 'Aws Systems Manager State Manager', 'an optional tech label', 'an optional description')
@enduml
```

## AwsSystemsManagerStateManagerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerStateManagerCard
include('aws-q3-2022/Resource/ManagementGovernance/AwsSystemsManagerStateManager')

' renders the element
AwsSystemsManagerStateManagerCard('AwsSystemsManagerStateManagerCard', 'Aws Systems Manager State Manager Card', 'an optional description')
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerStateManagerCard
include('aws-q3-2022/Resource/ManagementGovernance/AwsSystemsManagerStateManager')

' renders the element
AwsSystemsManagerStateManagerCard('AwsSystemsManagerStateManagerCard', 'Aws Systems Manager State Manager Card', 'an optional description')
@enduml
```

## AwsSystemsManagerStateManagerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerStateManagerGroup
include('aws-q3-2022/Resource/ManagementGovernance/AwsSystemsManagerStateManager')

' renders the element
AwsSystemsManagerStateManagerGroup('AwsSystemsManagerStateManagerGroup', 'Aws Systems Manager State Manager Group', 'an optional tech label') {
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerStateManagerGroup
include('aws-q3-2022/Resource/ManagementGovernance/AwsSystemsManagerStateManager')

' renders the element
AwsSystemsManagerStateManagerGroup('AwsSystemsManagerStateManagerGroup', 'Aws Systems Manager State Manager Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

