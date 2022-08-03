# AmazonPinpointJourney


```text
aws-q2-2022/Resource/BusinessApplications/AmazonPinpointJourney
```

```text
include('aws-q2-2022/Resource/BusinessApplications/AmazonPinpointJourney')
```



| Illustration | AmazonPinpointJourney | AmazonPinpointJourneyCard | AmazonPinpointJourneyGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2022/Resource/BusinessApplications/AmazonPinpointJourney.png) | ![illustration for AmazonPinpointJourney](../../../aws-q2-2022/Resource/BusinessApplications/AmazonPinpointJourney.Local.png) | ![illustration for AmazonPinpointJourneyCard](../../../aws-q2-2022/Resource/BusinessApplications/AmazonPinpointJourneyCard.Local.png) | ![illustration for AmazonPinpointJourneyGroup](../../../aws-q2-2022/Resource/BusinessApplications/AmazonPinpointJourneyGroup.Local.png) |




## AmazonPinpointJourney

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonPinpointJourney
include('aws-q2-2022/Resource/BusinessApplications/AmazonPinpointJourney')

' renders the element
AmazonPinpointJourney('AmazonPinpointJourney', 'Amazon Pinpoint Journey', 'an optional tech label', 'an optional description')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonPinpointJourney
include('aws-q2-2022/Resource/BusinessApplications/AmazonPinpointJourney')

' renders the element
AmazonPinpointJourney('AmazonPinpointJourney', 'Amazon Pinpoint Journey', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonPinpointJourneyCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonPinpointJourneyCard
include('aws-q2-2022/Resource/BusinessApplications/AmazonPinpointJourney')

' renders the element
AmazonPinpointJourneyCard('AmazonPinpointJourneyCard', 'Amazon Pinpoint Journey Card', 'an optional description')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonPinpointJourneyCard
include('aws-q2-2022/Resource/BusinessApplications/AmazonPinpointJourney')

' renders the element
AmazonPinpointJourneyCard('AmazonPinpointJourneyCard', 'Amazon Pinpoint Journey Card', 'an optional description')
@enduml
```

## AmazonPinpointJourneyGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonPinpointJourneyGroup
include('aws-q2-2022/Resource/BusinessApplications/AmazonPinpointJourney')

' renders the element
AmazonPinpointJourneyGroup('AmazonPinpointJourneyGroup', 'Amazon Pinpoint Journey Group', 'an optional tech label') {
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonPinpointJourneyGroup
include('aws-q2-2022/Resource/BusinessApplications/AmazonPinpointJourney')

' renders the element
AmazonPinpointJourneyGroup('AmazonPinpointJourneyGroup', 'Amazon Pinpoint Journey Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

