# AmazonDevOpsGuru


```text
aws-q1-2025/Architecture/ArtificialIntelligence/AmazonDevOpsGuru
```

```text
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonDevOpsGuru')
```



| Illustration | AmazonDevOpsGuru | AmazonDevOpsGuruCard | AmazonDevOpsGuruGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Architecture/ArtificialIntelligence/AmazonDevOpsGuru.png) | ![illustration for AmazonDevOpsGuru](../../../aws-q1-2025/Architecture/ArtificialIntelligence/AmazonDevOpsGuru.Local.png) | ![illustration for AmazonDevOpsGuruCard](../../../aws-q1-2025/Architecture/ArtificialIntelligence/AmazonDevOpsGuruCard.Local.png) | ![illustration for AmazonDevOpsGuruGroup](../../../aws-q1-2025/Architecture/ArtificialIntelligence/AmazonDevOpsGuruGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonDevOpsGuruXs>`
- `<$AmazonDevOpsGuruSm>`
- `<$AmazonDevOpsGuruMd>`
- `<$AmazonDevOpsGuruLg>`





## AmazonDevOpsGuru

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonDevOpsGuru
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonDevOpsGuru')

' renders the element
AmazonDevOpsGuru('AmazonDevOpsGuru', 'Amazon Dev Ops Guru', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonDevOpsGuru
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonDevOpsGuru')

' renders the element
AmazonDevOpsGuru('AmazonDevOpsGuru', 'Amazon Dev Ops Guru', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonDevOpsGuruCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonDevOpsGuruCard
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonDevOpsGuru')

' renders the element
AmazonDevOpsGuruCard('AmazonDevOpsGuruCard', 'Amazon Dev Ops Guru Card', 'an optional description')
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

' loads the Item which embeds the element AmazonDevOpsGuruCard
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonDevOpsGuru')

' renders the element
AmazonDevOpsGuruCard('AmazonDevOpsGuruCard', 'Amazon Dev Ops Guru Card', 'an optional description')
@enduml
```

## AmazonDevOpsGuruGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonDevOpsGuruGroup
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonDevOpsGuru')

' renders the element
AmazonDevOpsGuruGroup('AmazonDevOpsGuruGroup', 'Amazon Dev Ops Guru Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonDevOpsGuruGroup
include('aws-q1-2025/Architecture/ArtificialIntelligence/AmazonDevOpsGuru')

' renders the element
AmazonDevOpsGuruGroup('AmazonDevOpsGuruGroup', 'Amazon Dev Ops Guru Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

