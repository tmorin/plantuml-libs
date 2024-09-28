# AmazonRds


```text
aws-q2-2024/Architecture/Database/AmazonRds
```

```text
include('aws-q2-2024/Architecture/Database/AmazonRds')
```



| Illustration | AmazonRds | AmazonRdsCard | AmazonRdsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2024/Architecture/Database/AmazonRds.png) | ![illustration for AmazonRds](../../../aws-q2-2024/Architecture/Database/AmazonRds.Local.png) | ![illustration for AmazonRdsCard](../../../aws-q2-2024/Architecture/Database/AmazonRdsCard.Local.png) | ![illustration for AmazonRdsGroup](../../../aws-q2-2024/Architecture/Database/AmazonRdsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonRdsXs>`
- `<$AmazonRdsSm>`
- `<$AmazonRdsMd>`
- `<$AmazonRdsLg>`





## AmazonRds

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonRds
include('aws-q2-2024/Architecture/Database/AmazonRds')

' renders the element
AmazonRds('AmazonRds', 'Amazon Rds', 'an optional tech label', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonRds
include('aws-q2-2024/Architecture/Database/AmazonRds')

' renders the element
AmazonRds('AmazonRds', 'Amazon Rds', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonRdsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonRdsCard
include('aws-q2-2024/Architecture/Database/AmazonRds')

' renders the element
AmazonRdsCard('AmazonRdsCard', 'Amazon Rds Card', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonRdsCard
include('aws-q2-2024/Architecture/Database/AmazonRds')

' renders the element
AmazonRdsCard('AmazonRdsCard', 'Amazon Rds Card', 'an optional description')
@enduml
```

## AmazonRdsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonRdsGroup
include('aws-q2-2024/Architecture/Database/AmazonRds')

' renders the element
AmazonRdsGroup('AmazonRdsGroup', 'Amazon Rds Group', 'an optional tech label') {
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonRdsGroup
include('aws-q2-2024/Architecture/Database/AmazonRds')

' renders the element
AmazonRdsGroup('AmazonRdsGroup', 'Amazon Rds Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

