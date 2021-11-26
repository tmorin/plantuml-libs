# AwsSystemsManager


```text
aws-q3-2021/Architecture/ManagementGovernance/AwsSystemsManager
```

```text
include('aws-q3-2021/Architecture/ManagementGovernance/AwsSystemsManager')
```



| Illustration | AwsSystemsManager | AwsSystemsManagerCard | AwsSystemsManagerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/ManagementGovernance/AwsSystemsManager.png) | ![illustration for AwsSystemsManager](../../../aws-q3-2021/Architecture/ManagementGovernance/AwsSystemsManager.Local.png) | ![illustration for AwsSystemsManagerCard](../../../aws-q3-2021/Architecture/ManagementGovernance/AwsSystemsManagerCard.Local.png) | ![illustration for AwsSystemsManagerGroup](../../../aws-q3-2021/Architecture/ManagementGovernance/AwsSystemsManagerGroup.Local.png) |




## AwsSystemsManager

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsSystemsManager
include('aws-q3-2021/Architecture/ManagementGovernance/AwsSystemsManager')

' renders the element
AwsSystemsManager('AwsSystemsManager', 'Aws Systems Manager', 'an optional tech label')
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

' loads the Item which embeds the element AwsSystemsManager
include('aws-q3-2021/Architecture/ManagementGovernance/AwsSystemsManager')

' renders the element
AwsSystemsManager('AwsSystemsManager', 'Aws Systems Manager', 'an optional tech label')
@enduml
```

## AwsSystemsManagerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerCard
include('aws-q3-2021/Architecture/ManagementGovernance/AwsSystemsManager')

' renders the element
AwsSystemsManagerCard('AwsSystemsManagerCard', 'Aws Systems Manager Card', 'an optional description')
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

' loads the Item which embeds the element AwsSystemsManagerCard
include('aws-q3-2021/Architecture/ManagementGovernance/AwsSystemsManager')

' renders the element
AwsSystemsManagerCard('AwsSystemsManagerCard', 'Aws Systems Manager Card', 'an optional description')
@enduml
```

## AwsSystemsManagerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsSystemsManagerGroup
include('aws-q3-2021/Architecture/ManagementGovernance/AwsSystemsManager')

' renders the element
AwsSystemsManagerGroup('AwsSystemsManagerGroup', 'Aws Systems Manager Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsSystemsManagerGroup
include('aws-q3-2021/Architecture/ManagementGovernance/AwsSystemsManager')

' renders the element
AwsSystemsManagerGroup('AwsSystemsManagerGroup', 'Aws Systems Manager Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

