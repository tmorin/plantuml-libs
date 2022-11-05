# AwsSystemsManagerSessionManager


```text
aws-q3-2022/Resource/ManagementGovernance/AwsSystemsManagerSessionManager
```

```text
include('aws-q3-2022/Resource/ManagementGovernance/AwsSystemsManagerSessionManager')
```



| Illustration | AwsSystemsManagerSessionManager | AwsSystemsManagerSessionManagerCard | AwsSystemsManagerSessionManagerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2022/Resource/ManagementGovernance/AwsSystemsManagerSessionManager.png) | ![illustration for AwsSystemsManagerSessionManager](../../../aws-q3-2022/Resource/ManagementGovernance/AwsSystemsManagerSessionManager.Local.png) | ![illustration for AwsSystemsManagerSessionManagerCard](../../../aws-q3-2022/Resource/ManagementGovernance/AwsSystemsManagerSessionManagerCard.Local.png) | ![illustration for AwsSystemsManagerSessionManagerGroup](../../../aws-q3-2022/Resource/ManagementGovernance/AwsSystemsManagerSessionManagerGroup.Local.png) |




## AwsSystemsManagerSessionManager

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerSessionManager
include('aws-q3-2022/Resource/ManagementGovernance/AwsSystemsManagerSessionManager')

' renders the element
AwsSystemsManagerSessionManager('AwsSystemsManagerSessionManager', 'Aws Systems Manager Session Manager', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsSystemsManagerSessionManager
include('aws-q3-2022/Resource/ManagementGovernance/AwsSystemsManagerSessionManager')

' renders the element
AwsSystemsManagerSessionManager('AwsSystemsManagerSessionManager', 'Aws Systems Manager Session Manager', 'an optional tech label', 'an optional description')
@enduml
```

## AwsSystemsManagerSessionManagerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerSessionManagerCard
include('aws-q3-2022/Resource/ManagementGovernance/AwsSystemsManagerSessionManager')

' renders the element
AwsSystemsManagerSessionManagerCard('AwsSystemsManagerSessionManagerCard', 'Aws Systems Manager Session Manager Card', 'an optional description')
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

' loads the Item which embeds the element AwsSystemsManagerSessionManagerCard
include('aws-q3-2022/Resource/ManagementGovernance/AwsSystemsManagerSessionManager')

' renders the element
AwsSystemsManagerSessionManagerCard('AwsSystemsManagerSessionManagerCard', 'Aws Systems Manager Session Manager Card', 'an optional description')
@enduml
```

## AwsSystemsManagerSessionManagerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerSessionManagerGroup
include('aws-q3-2022/Resource/ManagementGovernance/AwsSystemsManagerSessionManager')

' renders the element
AwsSystemsManagerSessionManagerGroup('AwsSystemsManagerSessionManagerGroup', 'Aws Systems Manager Session Manager Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsSystemsManagerSessionManagerGroup
include('aws-q3-2022/Resource/ManagementGovernance/AwsSystemsManagerSessionManager')

' renders the element
AwsSystemsManagerSessionManagerGroup('AwsSystemsManagerSessionManagerGroup', 'Aws Systems Manager Session Manager Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

