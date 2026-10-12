# AmazonAppFlow


```text
aws/Architecture/ApplicationIntegration/AmazonAppFlow
```

```text
include('aws/Architecture/ApplicationIntegration/AmazonAppFlow')
```



| Illustration | AmazonAppFlow | AmazonAppFlowCard | AmazonAppFlowGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Architecture/ApplicationIntegration/AmazonAppFlow.png) | ![illustration for AmazonAppFlow](../../../aws/Architecture/ApplicationIntegration/AmazonAppFlow.Local.png) | ![illustration for AmazonAppFlowCard](../../../aws/Architecture/ApplicationIntegration/AmazonAppFlowCard.Local.png) | ![illustration for AmazonAppFlowGroup](../../../aws/Architecture/ApplicationIntegration/AmazonAppFlowGroup.Local.png) |



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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonAppFlow
include('aws/Architecture/ApplicationIntegration/AmazonAppFlow')

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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonAppFlow
include('aws/Architecture/ApplicationIntegration/AmazonAppFlow')

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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonAppFlowCard
include('aws/Architecture/ApplicationIntegration/AmazonAppFlow')

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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonAppFlowCard
include('aws/Architecture/ApplicationIntegration/AmazonAppFlow')

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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonAppFlowGroup
include('aws/Architecture/ApplicationIntegration/AmazonAppFlow')

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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonAppFlowGroup
include('aws/Architecture/ApplicationIntegration/AmazonAppFlow')

' renders the element
AmazonAppFlowGroup('AmazonAppFlowGroup', 'Amazon App Flow Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

