# AwsChatbot


```text
aws-20210131/Architecture/ManagementGovernance/AwsChatbot
```

```text
include('aws-20210131/Architecture/ManagementGovernance/AwsChatbot')
```



| Illustration | AwsChatbot | AwsChatbotCard | AwsChatbotGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/ManagementGovernance/AwsChatbot.png) | ![illustration for AwsChatbot](../../../aws-20210131/Architecture/ManagementGovernance/AwsChatbot.Local.png) | ![illustration for AwsChatbotCard](../../../aws-20210131/Architecture/ManagementGovernance/AwsChatbotCard.Local.png) | ![illustration for AwsChatbotGroup](../../../aws-20210131/Architecture/ManagementGovernance/AwsChatbotGroup.Local.png) |




## AwsChatbot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsChatbot
include('aws-20210131/Architecture/ManagementGovernance/AwsChatbot')

' renders the element
AwsChatbot('AwsChatbot', 'Aws Chatbot', 'an optional tech label')
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

' loads the Item which embeds the element AwsChatbot
include('aws-20210131/Architecture/ManagementGovernance/AwsChatbot')

' renders the element
AwsChatbot('AwsChatbot', 'Aws Chatbot', 'an optional tech label')
@enduml
```

## AwsChatbotCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsChatbotCard
include('aws-20210131/Architecture/ManagementGovernance/AwsChatbot')

' renders the element
AwsChatbotCard('AwsChatbotCard', 'Aws Chatbot Card', 'an optional description')
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

' loads the Item which embeds the element AwsChatbotCard
include('aws-20210131/Architecture/ManagementGovernance/AwsChatbot')

' renders the element
AwsChatbotCard('AwsChatbotCard', 'Aws Chatbot Card', 'an optional description')
@enduml
```

## AwsChatbotGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsChatbotGroup
include('aws-20210131/Architecture/ManagementGovernance/AwsChatbot')

' renders the element
AwsChatbotGroup('AwsChatbotGroup', 'Aws Chatbot Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsChatbotGroup
include('aws-20210131/Architecture/ManagementGovernance/AwsChatbot')

' renders the element
AwsChatbotGroup('AwsChatbotGroup', 'Aws Chatbot Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

