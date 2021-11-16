# AwsBackintAgent


```text
aws-q3-2021/Architecture/ManagementGovernance/AwsBackintAgent
```

```text
include('aws-q3-2021/Architecture/ManagementGovernance/AwsBackintAgent')
```



| Illustration | AwsBackintAgent | AwsBackintAgentCard | AwsBackintAgentGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/ManagementGovernance/AwsBackintAgent.png) | ![illustration for AwsBackintAgent](../../../aws-q3-2021/Architecture/ManagementGovernance/AwsBackintAgent.Local.png) | ![illustration for AwsBackintAgentCard](../../../aws-q3-2021/Architecture/ManagementGovernance/AwsBackintAgentCard.Local.png) | ![illustration for AwsBackintAgentGroup](../../../aws-q3-2021/Architecture/ManagementGovernance/AwsBackintAgentGroup.Local.png) |




## AwsBackintAgent

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsBackintAgent
include('aws-q3-2021/Architecture/ManagementGovernance/AwsBackintAgent')

' renders the element
AwsBackintAgent('AwsBackintAgent', 'Aws Backint Agent', 'an optional tech label')
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

' loads the Item which embeds the element AwsBackintAgent
include('aws-q3-2021/Architecture/ManagementGovernance/AwsBackintAgent')

' renders the element
AwsBackintAgent('AwsBackintAgent', 'Aws Backint Agent', 'an optional tech label')
@enduml
```

## AwsBackintAgentCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsBackintAgentCard
include('aws-q3-2021/Architecture/ManagementGovernance/AwsBackintAgent')

' renders the element
AwsBackintAgentCard('AwsBackintAgentCard', 'Aws Backint Agent Card', 'an optional description')
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

' loads the Item which embeds the element AwsBackintAgentCard
include('aws-q3-2021/Architecture/ManagementGovernance/AwsBackintAgent')

' renders the element
AwsBackintAgentCard('AwsBackintAgentCard', 'Aws Backint Agent Card', 'an optional description')
@enduml
```

## AwsBackintAgentGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsBackintAgentGroup
include('aws-q3-2021/Architecture/ManagementGovernance/AwsBackintAgent')

' renders the element
AwsBackintAgentGroup('AwsBackintAgentGroup', 'Aws Backint Agent Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsBackintAgentGroup
include('aws-q3-2021/Architecture/ManagementGovernance/AwsBackintAgent')

' renders the element
AwsBackintAgentGroup('AwsBackintAgentGroup', 'Aws Backint Agent Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

