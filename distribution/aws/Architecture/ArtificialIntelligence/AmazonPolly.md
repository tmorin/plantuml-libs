# AmazonPolly


```text
aws/Architecture/ArtificialIntelligence/AmazonPolly
```

```text
include('aws/Architecture/ArtificialIntelligence/AmazonPolly')
```



| Illustration | AmazonPolly | AmazonPollyCard | AmazonPollyGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Architecture/ArtificialIntelligence/AmazonPolly.png) | ![illustration for AmazonPolly](../../../aws/Architecture/ArtificialIntelligence/AmazonPolly.Local.png) | ![illustration for AmazonPollyCard](../../../aws/Architecture/ArtificialIntelligence/AmazonPollyCard.Local.png) | ![illustration for AmazonPollyGroup](../../../aws/Architecture/ArtificialIntelligence/AmazonPollyGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonPollyXs>`
- `<$AmazonPollySm>`
- `<$AmazonPollyMd>`
- `<$AmazonPollyLg>`





## AmazonPolly

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonPolly
include('aws/Architecture/ArtificialIntelligence/AmazonPolly')

' renders the element
AmazonPolly('AmazonPolly', 'Amazon Polly', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonPolly
include('aws/Architecture/ArtificialIntelligence/AmazonPolly')

' renders the element
AmazonPolly('AmazonPolly', 'Amazon Polly', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonPollyCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonPollyCard
include('aws/Architecture/ArtificialIntelligence/AmazonPolly')

' renders the element
AmazonPollyCard('AmazonPollyCard', 'Amazon Polly Card', 'an optional description')
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

' loads the Item which embeds the element AmazonPollyCard
include('aws/Architecture/ArtificialIntelligence/AmazonPolly')

' renders the element
AmazonPollyCard('AmazonPollyCard', 'Amazon Polly Card', 'an optional description')
@enduml
```

## AmazonPollyGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonPollyGroup
include('aws/Architecture/ArtificialIntelligence/AmazonPolly')

' renders the element
AmazonPollyGroup('AmazonPollyGroup', 'Amazon Polly Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonPollyGroup
include('aws/Architecture/ArtificialIntelligence/AmazonPolly')

' renders the element
AmazonPollyGroup('AmazonPollyGroup', 'Amazon Polly Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

