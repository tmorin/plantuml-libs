# AwsExpressWorkflows


```text
aws-20210730/Architecture/AppIntegration/AwsExpressWorkflows
```

```text
include('aws-20210730/Architecture/AppIntegration/AwsExpressWorkflows')
```



| Illustration | AwsExpressWorkflows | AwsExpressWorkflowsCard | AwsExpressWorkflowsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Architecture/AppIntegration/AwsExpressWorkflows.png) | ![illustration for AwsExpressWorkflows](../../../aws-20210730/Architecture/AppIntegration/AwsExpressWorkflows.Local.png) | ![illustration for AwsExpressWorkflowsCard](../../../aws-20210730/Architecture/AppIntegration/AwsExpressWorkflowsCard.Local.png) | ![illustration for AwsExpressWorkflowsGroup](../../../aws-20210730/Architecture/AppIntegration/AwsExpressWorkflowsGroup.Local.png) |




## AwsExpressWorkflows

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsExpressWorkflows
include('aws-20210730/Architecture/AppIntegration/AwsExpressWorkflows')

' renders the element
AwsExpressWorkflows('AwsExpressWorkflows', 'Aws Express Workflows', 'an optional tech label')
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

' loads the Item which embeds the element AwsExpressWorkflows
include('aws-20210730/Architecture/AppIntegration/AwsExpressWorkflows')

' renders the element
AwsExpressWorkflows('AwsExpressWorkflows', 'Aws Express Workflows', 'an optional tech label')
@enduml
```

## AwsExpressWorkflowsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsExpressWorkflowsCard
include('aws-20210730/Architecture/AppIntegration/AwsExpressWorkflows')

' renders the element
AwsExpressWorkflowsCard('AwsExpressWorkflowsCard', 'Aws Express Workflows Card', 'an optional description')
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

' loads the Item which embeds the element AwsExpressWorkflowsCard
include('aws-20210730/Architecture/AppIntegration/AwsExpressWorkflows')

' renders the element
AwsExpressWorkflowsCard('AwsExpressWorkflowsCard', 'Aws Express Workflows Card', 'an optional description')
@enduml
```

## AwsExpressWorkflowsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsExpressWorkflowsGroup
include('aws-20210730/Architecture/AppIntegration/AwsExpressWorkflows')

' renders the element
AwsExpressWorkflowsGroup('AwsExpressWorkflowsGroup', 'Aws Express Workflows Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsExpressWorkflowsGroup
include('aws-20210730/Architecture/AppIntegration/AwsExpressWorkflows')

' renders the element
AwsExpressWorkflowsGroup('AwsExpressWorkflowsGroup', 'Aws Express Workflows Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

