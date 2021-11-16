# AwsOpsWorksInstances


```text
aws-q3-2021/Resource/ManagementGovernance/AwsOpsWorksInstances
```

```text
include('aws-q3-2021/Resource/ManagementGovernance/AwsOpsWorksInstances')
```



| Illustration | AwsOpsWorksInstances | AwsOpsWorksInstancesCard | AwsOpsWorksInstancesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Resource/ManagementGovernance/AwsOpsWorksInstances.png) | ![illustration for AwsOpsWorksInstances](../../../aws-q3-2021/Resource/ManagementGovernance/AwsOpsWorksInstances.Local.png) | ![illustration for AwsOpsWorksInstancesCard](../../../aws-q3-2021/Resource/ManagementGovernance/AwsOpsWorksInstancesCard.Local.png) | ![illustration for AwsOpsWorksInstancesGroup](../../../aws-q3-2021/Resource/ManagementGovernance/AwsOpsWorksInstancesGroup.Local.png) |




## AwsOpsWorksInstances

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsOpsWorksInstances
include('aws-q3-2021/Resource/ManagementGovernance/AwsOpsWorksInstances')

' renders the element
AwsOpsWorksInstances('AwsOpsWorksInstances', 'Aws Ops Works Instances', 'an optional tech label')
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

' loads the Item which embeds the element AwsOpsWorksInstances
include('aws-q3-2021/Resource/ManagementGovernance/AwsOpsWorksInstances')

' renders the element
AwsOpsWorksInstances('AwsOpsWorksInstances', 'Aws Ops Works Instances', 'an optional tech label')
@enduml
```

## AwsOpsWorksInstancesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsOpsWorksInstancesCard
include('aws-q3-2021/Resource/ManagementGovernance/AwsOpsWorksInstances')

' renders the element
AwsOpsWorksInstancesCard('AwsOpsWorksInstancesCard', 'Aws Ops Works Instances Card', 'an optional description')
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

' loads the Item which embeds the element AwsOpsWorksInstancesCard
include('aws-q3-2021/Resource/ManagementGovernance/AwsOpsWorksInstances')

' renders the element
AwsOpsWorksInstancesCard('AwsOpsWorksInstancesCard', 'Aws Ops Works Instances Card', 'an optional description')
@enduml
```

## AwsOpsWorksInstancesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsOpsWorksInstancesGroup
include('aws-q3-2021/Resource/ManagementGovernance/AwsOpsWorksInstances')

' renders the element
AwsOpsWorksInstancesGroup('AwsOpsWorksInstancesGroup', 'Aws Ops Works Instances Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsOpsWorksInstancesGroup
include('aws-q3-2021/Resource/ManagementGovernance/AwsOpsWorksInstances')

' renders the element
AwsOpsWorksInstancesGroup('AwsOpsWorksInstancesGroup', 'Aws Ops Works Instances Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

