# AwsCodePipeline


```text
aws-q1-2023/Architecture/DeveloperTools/AwsCodePipeline
```

```text
include('aws-q1-2023/Architecture/DeveloperTools/AwsCodePipeline')
```



| Illustration | AwsCodePipeline | AwsCodePipelineCard | AwsCodePipelineGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Architecture/DeveloperTools/AwsCodePipeline.png) | ![illustration for AwsCodePipeline](../../../aws-q1-2023/Architecture/DeveloperTools/AwsCodePipeline.Local.png) | ![illustration for AwsCodePipelineCard](../../../aws-q1-2023/Architecture/DeveloperTools/AwsCodePipelineCard.Local.png) | ![illustration for AwsCodePipelineGroup](../../../aws-q1-2023/Architecture/DeveloperTools/AwsCodePipelineGroup.Local.png) |




## AwsCodePipeline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsCodePipeline
include('aws-q1-2023/Architecture/DeveloperTools/AwsCodePipeline')

' renders the element
AwsCodePipeline('AwsCodePipeline', 'Aws Code Pipeline', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsCodePipeline
include('aws-q1-2023/Architecture/DeveloperTools/AwsCodePipeline')

' renders the element
AwsCodePipeline('AwsCodePipeline', 'Aws Code Pipeline', 'an optional tech label', 'an optional description')
@enduml
```

## AwsCodePipelineCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsCodePipelineCard
include('aws-q1-2023/Architecture/DeveloperTools/AwsCodePipeline')

' renders the element
AwsCodePipelineCard('AwsCodePipelineCard', 'Aws Code Pipeline Card', 'an optional description')
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

' loads the Item which embeds the element AwsCodePipelineCard
include('aws-q1-2023/Architecture/DeveloperTools/AwsCodePipeline')

' renders the element
AwsCodePipelineCard('AwsCodePipelineCard', 'Aws Code Pipeline Card', 'an optional description')
@enduml
```

## AwsCodePipelineGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsCodePipelineGroup
include('aws-q1-2023/Architecture/DeveloperTools/AwsCodePipeline')

' renders the element
AwsCodePipelineGroup('AwsCodePipelineGroup', 'Aws Code Pipeline Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsCodePipelineGroup
include('aws-q1-2023/Architecture/DeveloperTools/AwsCodePipeline')

' renders the element
AwsCodePipelineGroup('AwsCodePipelineGroup', 'Aws Code Pipeline Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

