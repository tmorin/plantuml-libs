# AmazonNova


```text
aws-q1-2025/Architecture/ArtificialIntelligence/AmazonNova
```

```text
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonNova')
```



| Illustration | AmazonNova | AmazonNovaCard | AmazonNovaGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Architecture/ArtificialIntelligence/AmazonNova.png) | ![illustration for AmazonNova](../../../aws-q1-2025/Architecture/ArtificialIntelligence/AmazonNova.Local.png) | ![illustration for AmazonNovaCard](../../../aws-q1-2025/Architecture/ArtificialIntelligence/AmazonNovaCard.Local.png) | ![illustration for AmazonNovaGroup](../../../aws-q1-2025/Architecture/ArtificialIntelligence/AmazonNovaGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonNovaXs>`
- `<$AmazonNovaSm>`
- `<$AmazonNovaMd>`
- `<$AmazonNovaLg>`





## AmazonNova

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonNova
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonNova')

' renders the element
AmazonNova('AmazonNova', 'Amazon Nova', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonNova
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonNova')

' renders the element
AmazonNova('AmazonNova', 'Amazon Nova', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonNovaCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonNovaCard
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonNova')

' renders the element
AmazonNovaCard('AmazonNovaCard', 'Amazon Nova Card', 'an optional description')
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

' loads the Item which embeds the element AmazonNovaCard
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonNova')

' renders the element
AmazonNovaCard('AmazonNovaCard', 'Amazon Nova Card', 'an optional description')
@enduml
```

## AmazonNovaGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonNovaGroup
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonNova')

' renders the element
AmazonNovaGroup('AmazonNovaGroup', 'Amazon Nova Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonNovaGroup
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonNova')

' renders the element
AmazonNovaGroup('AmazonNovaGroup', 'Amazon Nova Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

