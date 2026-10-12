# AmazonTimestream


```text
aws/Architecture/Databases/AmazonTimestream
```

```text
include('aws/Architecture/Databases/AmazonTimestream')
```



| Illustration | AmazonTimestream | AmazonTimestreamCard | AmazonTimestreamGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Architecture/Databases/AmazonTimestream.png) | ![illustration for AmazonTimestream](../../../aws/Architecture/Databases/AmazonTimestream.Local.png) | ![illustration for AmazonTimestreamCard](../../../aws/Architecture/Databases/AmazonTimestreamCard.Local.png) | ![illustration for AmazonTimestreamGroup](../../../aws/Architecture/Databases/AmazonTimestreamGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonTimestreamXs>`
- `<$AmazonTimestreamSm>`
- `<$AmazonTimestreamMd>`
- `<$AmazonTimestreamLg>`





## AmazonTimestream

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonTimestream
include('aws/Architecture/Databases/AmazonTimestream')

' renders the element
AmazonTimestream('AmazonTimestream', 'Amazon Timestream', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonTimestream
include('aws/Architecture/Databases/AmazonTimestream')

' renders the element
AmazonTimestream('AmazonTimestream', 'Amazon Timestream', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonTimestreamCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonTimestreamCard
include('aws/Architecture/Databases/AmazonTimestream')

' renders the element
AmazonTimestreamCard('AmazonTimestreamCard', 'Amazon Timestream Card', 'an optional description')
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

' loads the Item which embeds the element AmazonTimestreamCard
include('aws/Architecture/Databases/AmazonTimestream')

' renders the element
AmazonTimestreamCard('AmazonTimestreamCard', 'Amazon Timestream Card', 'an optional description')
@enduml
```

## AmazonTimestreamGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonTimestreamGroup
include('aws/Architecture/Databases/AmazonTimestream')

' renders the element
AmazonTimestreamGroup('AmazonTimestreamGroup', 'Amazon Timestream Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonTimestreamGroup
include('aws/Architecture/Databases/AmazonTimestream')

' renders the element
AmazonTimestreamGroup('AmazonTimestreamGroup', 'Amazon Timestream Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

