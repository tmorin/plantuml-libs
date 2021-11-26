# AmazonChimeVoiceConnector


```text
aws-20210730/Architecture/BusinessApplications/AmazonChimeVoiceConnector
```

```text
include('aws-20210730/Architecture/BusinessApplications/AmazonChimeVoiceConnector')
```



| Illustration | AmazonChimeVoiceConnector | AmazonChimeVoiceConnectorCard | AmazonChimeVoiceConnectorGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Architecture/BusinessApplications/AmazonChimeVoiceConnector.png) | ![illustration for AmazonChimeVoiceConnector](../../../aws-20210730/Architecture/BusinessApplications/AmazonChimeVoiceConnector.Local.png) | ![illustration for AmazonChimeVoiceConnectorCard](../../../aws-20210730/Architecture/BusinessApplications/AmazonChimeVoiceConnectorCard.Local.png) | ![illustration for AmazonChimeVoiceConnectorGroup](../../../aws-20210730/Architecture/BusinessApplications/AmazonChimeVoiceConnectorGroup.Local.png) |




## AmazonChimeVoiceConnector

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonChimeVoiceConnector
include('aws-20210730/Architecture/BusinessApplications/AmazonChimeVoiceConnector')

' renders the element
AmazonChimeVoiceConnector('AmazonChimeVoiceConnector', 'Amazon Chime Voice Connector', 'an optional tech label')
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

' loads the Item which embeds the element AmazonChimeVoiceConnector
include('aws-20210730/Architecture/BusinessApplications/AmazonChimeVoiceConnector')

' renders the element
AmazonChimeVoiceConnector('AmazonChimeVoiceConnector', 'Amazon Chime Voice Connector', 'an optional tech label')
@enduml
```

## AmazonChimeVoiceConnectorCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonChimeVoiceConnectorCard
include('aws-20210730/Architecture/BusinessApplications/AmazonChimeVoiceConnector')

' renders the element
AmazonChimeVoiceConnectorCard('AmazonChimeVoiceConnectorCard', 'Amazon Chime Voice Connector Card', 'an optional description')
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

' loads the Item which embeds the element AmazonChimeVoiceConnectorCard
include('aws-20210730/Architecture/BusinessApplications/AmazonChimeVoiceConnector')

' renders the element
AmazonChimeVoiceConnectorCard('AmazonChimeVoiceConnectorCard', 'Amazon Chime Voice Connector Card', 'an optional description')
@enduml
```

## AmazonChimeVoiceConnectorGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonChimeVoiceConnectorGroup
include('aws-20210730/Architecture/BusinessApplications/AmazonChimeVoiceConnector')

' renders the element
AmazonChimeVoiceConnectorGroup('AmazonChimeVoiceConnectorGroup', 'Amazon Chime Voice Connector Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonChimeVoiceConnectorGroup
include('aws-20210730/Architecture/BusinessApplications/AmazonChimeVoiceConnector')

' renders the element
AmazonChimeVoiceConnectorGroup('AmazonChimeVoiceConnectorGroup', 'Amazon Chime Voice Connector Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

