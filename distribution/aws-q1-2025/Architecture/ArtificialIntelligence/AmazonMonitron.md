# AmazonMonitron


```text
aws-q1-2025/Architecture/ArtificialIntelligence/AmazonMonitron
```

```text
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonMonitron')
```



| Illustration | AmazonMonitron | AmazonMonitronCard | AmazonMonitronGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Architecture/ArtificialIntelligence/AmazonMonitron.png) | ![illustration for AmazonMonitron](../../../aws-q1-2025/Architecture/ArtificialIntelligence/AmazonMonitron.Local.png) | ![illustration for AmazonMonitronCard](../../../aws-q1-2025/Architecture/ArtificialIntelligence/AmazonMonitronCard.Local.png) | ![illustration for AmazonMonitronGroup](../../../aws-q1-2025/Architecture/ArtificialIntelligence/AmazonMonitronGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonMonitronXs>`
- `<$AmazonMonitronSm>`
- `<$AmazonMonitronMd>`
- `<$AmazonMonitronLg>`





## AmazonMonitron

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonMonitron
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonMonitron')

' renders the element
AmazonMonitron('AmazonMonitron', 'Amazon Monitron', 'an optional tech label', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonMonitron
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonMonitron')

' renders the element
AmazonMonitron('AmazonMonitron', 'Amazon Monitron', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonMonitronCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonMonitronCard
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonMonitron')

' renders the element
AmazonMonitronCard('AmazonMonitronCard', 'Amazon Monitron Card', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonMonitronCard
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonMonitron')

' renders the element
AmazonMonitronCard('AmazonMonitronCard', 'Amazon Monitron Card', 'an optional description')
@enduml
```

## AmazonMonitronGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonMonitronGroup
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonMonitron')

' renders the element
AmazonMonitronGroup('AmazonMonitronGroup', 'Amazon Monitron Group', 'an optional tech label') {
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonMonitronGroup
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonMonitron')

' renders the element
AmazonMonitronGroup('AmazonMonitronGroup', 'Amazon Monitron Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

