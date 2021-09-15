# AwsCodePipeline


```text
aws-20210730/Architecture/DeveloperTools/AwsCodePipeline
```

```text
include('aws-20210730/Architecture/DeveloperTools/AwsCodePipeline')
```



| Illustration | AwsCodePipeline | AwsCodePipelineCard | AwsCodePipelineGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Architecture/DeveloperTools/AwsCodePipeline.png) | ![illustration for AwsCodePipeline](../../../aws-20210730/Architecture/DeveloperTools/AwsCodePipeline.Local.png) | ![illustration for AwsCodePipelineCard](../../../aws-20210730/Architecture/DeveloperTools/AwsCodePipelineCard.Local.png) | ![illustration for AwsCodePipelineGroup](../../../aws-20210730/Architecture/DeveloperTools/AwsCodePipelineGroup.Local.png) |




## AwsCodePipeline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsCodePipeline
include('aws-20210730/Architecture/DeveloperTools/AwsCodePipeline')

' renders the element
AwsCodePipeline('AwsCodePipeline', 'Aws Code Pipeline', 'an optional tech label')
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

' loads the Item which embeds the element AwsCodePipeline
include('aws-20210730/Architecture/DeveloperTools/AwsCodePipeline')

' renders the element
AwsCodePipeline('AwsCodePipeline', 'Aws Code Pipeline', 'an optional tech label')
@enduml
```

## AwsCodePipelineCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsCodePipelineCard
include('aws-20210730/Architecture/DeveloperTools/AwsCodePipeline')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsCodePipelineCard
include('aws-20210730/Architecture/DeveloperTools/AwsCodePipeline')

' renders the element
AwsCodePipelineCard('AwsCodePipelineCard', 'Aws Code Pipeline Card', 'an optional description')
@enduml
```

## AwsCodePipelineGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsCodePipelineGroup
include('aws-20210730/Architecture/DeveloperTools/AwsCodePipeline')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsCodePipelineGroup
include('aws-20210730/Architecture/DeveloperTools/AwsCodePipeline')

' renders the element
AwsCodePipelineGroup('AwsCodePipelineGroup', 'Aws Code Pipeline Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

