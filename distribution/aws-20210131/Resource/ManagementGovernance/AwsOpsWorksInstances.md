# AwsOpsWorksInstances


```text
aws-20210131/Resource/ManagementGovernance/AwsOpsWorksInstances
```

```text
include('aws-20210131/Resource/ManagementGovernance/AwsOpsWorksInstances')
```



| Illustration | AwsOpsWorksInstances | AwsOpsWorksInstancesCard | AwsOpsWorksInstancesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/ManagementGovernance/AwsOpsWorksInstances.png) | ![illustration for AwsOpsWorksInstances](../../../aws-20210131/Resource/ManagementGovernance/AwsOpsWorksInstances.Local.png) | ![illustration for AwsOpsWorksInstancesCard](../../../aws-20210131/Resource/ManagementGovernance/AwsOpsWorksInstancesCard.Local.png) | ![illustration for AwsOpsWorksInstancesGroup](../../../aws-20210131/Resource/ManagementGovernance/AwsOpsWorksInstancesGroup.Local.png) |




## AwsOpsWorksInstances

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsOpsWorksInstances
include('aws-20210131/Resource/ManagementGovernance/AwsOpsWorksInstances')

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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsOpsWorksInstances
include('aws-20210131/Resource/ManagementGovernance/AwsOpsWorksInstances')

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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsOpsWorksInstancesCard
include('aws-20210131/Resource/ManagementGovernance/AwsOpsWorksInstances')

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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsOpsWorksInstancesCard
include('aws-20210131/Resource/ManagementGovernance/AwsOpsWorksInstances')

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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsOpsWorksInstancesGroup
include('aws-20210131/Resource/ManagementGovernance/AwsOpsWorksInstances')

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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsOpsWorksInstancesGroup
include('aws-20210131/Resource/ManagementGovernance/AwsOpsWorksInstances')

' renders the element
AwsOpsWorksInstancesGroup('AwsOpsWorksInstancesGroup', 'Aws Ops Works Instances Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

