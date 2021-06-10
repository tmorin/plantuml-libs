# AmazonInspectorAgent


```text
aws-20210131/Resource/SecurityIdentityAndCompliance/AmazonInspectorAgent
```

```text
include('aws-20210131/Resource/SecurityIdentityAndCompliance/AmazonInspectorAgent')
```



| Illustration | AmazonInspectorAgent | AmazonInspectorAgentCard | AmazonInspectorAgentGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/SecurityIdentityAndCompliance/AmazonInspectorAgent.png) | ![illustration for AmazonInspectorAgent](../../../aws-20210131/Resource/SecurityIdentityAndCompliance/AmazonInspectorAgent.Local.png) | ![illustration for AmazonInspectorAgentCard](../../../aws-20210131/Resource/SecurityIdentityAndCompliance/AmazonInspectorAgentCard.Local.png) | ![illustration for AmazonInspectorAgentGroup](../../../aws-20210131/Resource/SecurityIdentityAndCompliance/AmazonInspectorAgentGroup.Local.png) |




## AmazonInspectorAgent

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonInspectorAgent
include('aws-20210131/Resource/SecurityIdentityAndCompliance/AmazonInspectorAgent')

' renders the element
AmazonInspectorAgent('AmazonInspectorAgent', 'Amazon Inspector Agent', 'an optional tech label')
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

' loads the Item which embeds the element AmazonInspectorAgent
include('aws-20210131/Resource/SecurityIdentityAndCompliance/AmazonInspectorAgent')

' renders the element
AmazonInspectorAgent('AmazonInspectorAgent', 'Amazon Inspector Agent', 'an optional tech label')
@enduml
```

## AmazonInspectorAgentCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonInspectorAgentCard
include('aws-20210131/Resource/SecurityIdentityAndCompliance/AmazonInspectorAgent')

' renders the element
AmazonInspectorAgentCard('AmazonInspectorAgentCard', 'Amazon Inspector Agent Card', 'an optional description')
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

' loads the Item which embeds the element AmazonInspectorAgentCard
include('aws-20210131/Resource/SecurityIdentityAndCompliance/AmazonInspectorAgent')

' renders the element
AmazonInspectorAgentCard('AmazonInspectorAgentCard', 'Amazon Inspector Agent Card', 'an optional description')
@enduml
```

## AmazonInspectorAgentGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonInspectorAgentGroup
include('aws-20210131/Resource/SecurityIdentityAndCompliance/AmazonInspectorAgent')

' renders the element
AmazonInspectorAgentGroup('AmazonInspectorAgentGroup', 'Amazon Inspector Agent Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonInspectorAgentGroup
include('aws-20210131/Resource/SecurityIdentityAndCompliance/AmazonInspectorAgent')

' renders the element
AmazonInspectorAgentGroup('AmazonInspectorAgentGroup', 'Amazon Inspector Agent Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

