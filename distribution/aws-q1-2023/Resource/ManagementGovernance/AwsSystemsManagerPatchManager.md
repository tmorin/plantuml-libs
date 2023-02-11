# AwsSystemsManagerPatchManager


```text
aws-q1-2023/Resource/ManagementGovernance/AwsSystemsManagerPatchManager
```

```text
include('aws-q1-2023/Resource/ManagementGovernance/AwsSystemsManagerPatchManager')
```



| Illustration | AwsSystemsManagerPatchManager | AwsSystemsManagerPatchManagerCard | AwsSystemsManagerPatchManagerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Resource/ManagementGovernance/AwsSystemsManagerPatchManager.png) | ![illustration for AwsSystemsManagerPatchManager](../../../aws-q1-2023/Resource/ManagementGovernance/AwsSystemsManagerPatchManager.Local.png) | ![illustration for AwsSystemsManagerPatchManagerCard](../../../aws-q1-2023/Resource/ManagementGovernance/AwsSystemsManagerPatchManagerCard.Local.png) | ![illustration for AwsSystemsManagerPatchManagerGroup](../../../aws-q1-2023/Resource/ManagementGovernance/AwsSystemsManagerPatchManagerGroup.Local.png) |




## AwsSystemsManagerPatchManager

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerPatchManager
include('aws-q1-2023/Resource/ManagementGovernance/AwsSystemsManagerPatchManager')

' renders the element
AwsSystemsManagerPatchManager('AwsSystemsManagerPatchManager', 'Aws Systems Manager Patch Manager', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsSystemsManagerPatchManager
include('aws-q1-2023/Resource/ManagementGovernance/AwsSystemsManagerPatchManager')

' renders the element
AwsSystemsManagerPatchManager('AwsSystemsManagerPatchManager', 'Aws Systems Manager Patch Manager', 'an optional tech label', 'an optional description')
@enduml
```

## AwsSystemsManagerPatchManagerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerPatchManagerCard
include('aws-q1-2023/Resource/ManagementGovernance/AwsSystemsManagerPatchManager')

' renders the element
AwsSystemsManagerPatchManagerCard('AwsSystemsManagerPatchManagerCard', 'Aws Systems Manager Patch Manager Card', 'an optional description')
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

' loads the Item which embeds the element AwsSystemsManagerPatchManagerCard
include('aws-q1-2023/Resource/ManagementGovernance/AwsSystemsManagerPatchManager')

' renders the element
AwsSystemsManagerPatchManagerCard('AwsSystemsManagerPatchManagerCard', 'Aws Systems Manager Patch Manager Card', 'an optional description')
@enduml
```

## AwsSystemsManagerPatchManagerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerPatchManagerGroup
include('aws-q1-2023/Resource/ManagementGovernance/AwsSystemsManagerPatchManager')

' renders the element
AwsSystemsManagerPatchManagerGroup('AwsSystemsManagerPatchManagerGroup', 'Aws Systems Manager Patch Manager Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsSystemsManagerPatchManagerGroup
include('aws-q1-2023/Resource/ManagementGovernance/AwsSystemsManagerPatchManager')

' renders the element
AwsSystemsManagerPatchManagerGroup('AwsSystemsManagerPatchManagerGroup', 'Aws Systems Manager Patch Manager Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

