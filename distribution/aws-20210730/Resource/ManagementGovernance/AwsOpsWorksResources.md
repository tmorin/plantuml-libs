# AwsOpsWorksResources


```text
aws-20210730/Resource/ManagementGovernance/AwsOpsWorksResources
```

```text
include('aws-20210730/Resource/ManagementGovernance/AwsOpsWorksResources')
```



| Illustration | AwsOpsWorksResources | AwsOpsWorksResourcesCard | AwsOpsWorksResourcesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Resource/ManagementGovernance/AwsOpsWorksResources.png) | ![illustration for AwsOpsWorksResources](../../../aws-20210730/Resource/ManagementGovernance/AwsOpsWorksResources.Local.png) | ![illustration for AwsOpsWorksResourcesCard](../../../aws-20210730/Resource/ManagementGovernance/AwsOpsWorksResourcesCard.Local.png) | ![illustration for AwsOpsWorksResourcesGroup](../../../aws-20210730/Resource/ManagementGovernance/AwsOpsWorksResourcesGroup.Local.png) |




## AwsOpsWorksResources

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsOpsWorksResources
include('aws-20210730/Resource/ManagementGovernance/AwsOpsWorksResources')

' renders the element
AwsOpsWorksResources('AwsOpsWorksResources', 'Aws Ops Works Resources', 'an optional tech label')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsOpsWorksResources
include('aws-20210730/Resource/ManagementGovernance/AwsOpsWorksResources')

' renders the element
AwsOpsWorksResources('AwsOpsWorksResources', 'Aws Ops Works Resources', 'an optional tech label')
@enduml
```

## AwsOpsWorksResourcesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsOpsWorksResourcesCard
include('aws-20210730/Resource/ManagementGovernance/AwsOpsWorksResources')

' renders the element
AwsOpsWorksResourcesCard('AwsOpsWorksResourcesCard', 'Aws Ops Works Resources Card', 'an optional description')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsOpsWorksResourcesCard
include('aws-20210730/Resource/ManagementGovernance/AwsOpsWorksResources')

' renders the element
AwsOpsWorksResourcesCard('AwsOpsWorksResourcesCard', 'Aws Ops Works Resources Card', 'an optional description')
@enduml
```

## AwsOpsWorksResourcesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsOpsWorksResourcesGroup
include('aws-20210730/Resource/ManagementGovernance/AwsOpsWorksResources')

' renders the element
AwsOpsWorksResourcesGroup('AwsOpsWorksResourcesGroup', 'Aws Ops Works Resources Group', 'an optional tech label') {
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsOpsWorksResourcesGroup
include('aws-20210730/Resource/ManagementGovernance/AwsOpsWorksResources')

' renders the element
AwsOpsWorksResourcesGroup('AwsOpsWorksResourcesGroup', 'Aws Ops Works Resources Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

