# AmazonAppFlow


```text
aws-q1-2024/Architecture/AppIntegration/AmazonAppFlow
```

```text
include('aws-q1-2024/Architecture/AppIntegration/AmazonAppFlow')
```



| Illustration | AmazonAppFlow | AmazonAppFlowCard | AmazonAppFlowGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2024/Architecture/AppIntegration/AmazonAppFlow.png) | ![illustration for AmazonAppFlow](../../../aws-q1-2024/Architecture/AppIntegration/AmazonAppFlow.Local.png) | ![illustration for AmazonAppFlowCard](../../../aws-q1-2024/Architecture/AppIntegration/AmazonAppFlowCard.Local.png) | ![illustration for AmazonAppFlowGroup](../../../aws-q1-2024/Architecture/AppIntegration/AmazonAppFlowGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonAppFlowXs>`
- `<$AmazonAppFlowSm>`
- `<$AmazonAppFlowMd>`
- `<$AmazonAppFlowLg>`





## AmazonAppFlow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AmazonAppFlow
include('aws-q1-2024/Architecture/AppIntegration/AmazonAppFlow')

' renders the element
AmazonAppFlow('AmazonAppFlow', 'Amazon App Flow', 'an optional tech label', 'an optional description')
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AmazonAppFlow
include('aws-q1-2024/Architecture/AppIntegration/AmazonAppFlow')

' renders the element
AmazonAppFlow('AmazonAppFlow', 'Amazon App Flow', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonAppFlowCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AmazonAppFlowCard
include('aws-q1-2024/Architecture/AppIntegration/AmazonAppFlow')

' renders the element
AmazonAppFlowCard('AmazonAppFlowCard', 'Amazon App Flow Card', 'an optional description')
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AmazonAppFlowCard
include('aws-q1-2024/Architecture/AppIntegration/AmazonAppFlow')

' renders the element
AmazonAppFlowCard('AmazonAppFlowCard', 'Amazon App Flow Card', 'an optional description')
@enduml
```

## AmazonAppFlowGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AmazonAppFlowGroup
include('aws-q1-2024/Architecture/AppIntegration/AmazonAppFlow')

' renders the element
AmazonAppFlowGroup('AmazonAppFlowGroup', 'Amazon App Flow Group', 'an optional tech label') {
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AmazonAppFlowGroup
include('aws-q1-2024/Architecture/AppIntegration/AmazonAppFlow')

' renders the element
AmazonAppFlowGroup('AmazonAppFlowGroup', 'Amazon App Flow Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

