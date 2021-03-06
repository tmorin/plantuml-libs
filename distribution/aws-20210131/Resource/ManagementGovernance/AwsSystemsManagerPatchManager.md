# AwsSystemsManagerPatchManager


```text
aws-20210131/Resource/ManagementGovernance/AwsSystemsManagerPatchManager
```

```text
include('aws-20210131/Resource/ManagementGovernance/AwsSystemsManagerPatchManager')
```



| Illustration | AwsSystemsManagerPatchManager | AwsSystemsManagerPatchManagerCard | AwsSystemsManagerPatchManagerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/ManagementGovernance/AwsSystemsManagerPatchManager.png) | ![illustration for AwsSystemsManagerPatchManager](../../../aws-20210131/Resource/ManagementGovernance/AwsSystemsManagerPatchManager.Local.png) | ![illustration for AwsSystemsManagerPatchManagerCard](../../../aws-20210131/Resource/ManagementGovernance/AwsSystemsManagerPatchManagerCard.Local.png) | ![illustration for AwsSystemsManagerPatchManagerGroup](../../../aws-20210131/Resource/ManagementGovernance/AwsSystemsManagerPatchManagerGroup.Local.png) |




## AwsSystemsManagerPatchManager

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerPatchManager
include('aws-20210131/Resource/ManagementGovernance/AwsSystemsManagerPatchManager')

' renders the element
AwsSystemsManagerPatchManager('AwsSystemsManagerPatchManager', 'Aws Systems Manager Patch Manager', 'an optional tech label')
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

' loads the Item which embeds the element AwsSystemsManagerPatchManager
include('aws-20210131/Resource/ManagementGovernance/AwsSystemsManagerPatchManager')

' renders the element
AwsSystemsManagerPatchManager('AwsSystemsManagerPatchManager', 'Aws Systems Manager Patch Manager', 'an optional tech label')
@enduml
```

## AwsSystemsManagerPatchManagerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerPatchManagerCard
include('aws-20210131/Resource/ManagementGovernance/AwsSystemsManagerPatchManager')

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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerPatchManagerCard
include('aws-20210131/Resource/ManagementGovernance/AwsSystemsManagerPatchManager')

' renders the element
AwsSystemsManagerPatchManagerCard('AwsSystemsManagerPatchManagerCard', 'Aws Systems Manager Patch Manager Card', 'an optional description')
@enduml
```

## AwsSystemsManagerPatchManagerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerPatchManagerGroup
include('aws-20210131/Resource/ManagementGovernance/AwsSystemsManagerPatchManager')

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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerPatchManagerGroup
include('aws-20210131/Resource/ManagementGovernance/AwsSystemsManagerPatchManager')

' renders the element
AwsSystemsManagerPatchManagerGroup('AwsSystemsManagerPatchManagerGroup', 'Aws Systems Manager Patch Manager Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

