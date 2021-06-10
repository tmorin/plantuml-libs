# AwsBackintAgent


```text
aws-20210131/Architecture/ManagementGovernance/AwsBackintAgent
```

```text
include('aws-20210131/Architecture/ManagementGovernance/AwsBackintAgent')
```



| Illustration | AwsBackintAgent | AwsBackintAgentCard | AwsBackintAgentGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/ManagementGovernance/AwsBackintAgent.png) | ![illustration for AwsBackintAgent](../../../aws-20210131/Architecture/ManagementGovernance/AwsBackintAgent.Local.png) | ![illustration for AwsBackintAgentCard](../../../aws-20210131/Architecture/ManagementGovernance/AwsBackintAgentCard.Local.png) | ![illustration for AwsBackintAgentGroup](../../../aws-20210131/Architecture/ManagementGovernance/AwsBackintAgentGroup.Local.png) |




## AwsBackintAgent

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsBackintAgent
include('aws-20210131/Architecture/ManagementGovernance/AwsBackintAgent')

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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsBackintAgent
include('aws-20210131/Architecture/ManagementGovernance/AwsBackintAgent')

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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsBackintAgentCard
include('aws-20210131/Architecture/ManagementGovernance/AwsBackintAgent')

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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsBackintAgentCard
include('aws-20210131/Architecture/ManagementGovernance/AwsBackintAgent')

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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsBackintAgentGroup
include('aws-20210131/Architecture/ManagementGovernance/AwsBackintAgent')

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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsBackintAgentGroup
include('aws-20210131/Architecture/ManagementGovernance/AwsBackintAgent')

' renders the element
AwsBackintAgentGroup('AwsBackintAgentGroup', 'Aws Backint Agent Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

