# AmazonQuickSight


```text
aws-q1-2023/Architecture/Analytics/AmazonQuickSight
```

```text
include('aws-q1-2023/Architecture/Analytics/AmazonQuickSight')
```



| Illustration | AmazonQuickSight | AmazonQuickSightCard | AmazonQuickSightGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Architecture/Analytics/AmazonQuickSight.png) | ![illustration for AmazonQuickSight](../../../aws-q1-2023/Architecture/Analytics/AmazonQuickSight.Local.png) | ![illustration for AmazonQuickSightCard](../../../aws-q1-2023/Architecture/Analytics/AmazonQuickSightCard.Local.png) | ![illustration for AmazonQuickSightGroup](../../../aws-q1-2023/Architecture/Analytics/AmazonQuickSightGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonQuickSightXs>`
- `<$AmazonQuickSightSm>`
- `<$AmazonQuickSightMd>`
- `<$AmazonQuickSightLg>`





## AmazonQuickSight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonQuickSight
include('aws-q1-2023/Architecture/Analytics/AmazonQuickSight')

' renders the element
AmazonQuickSight('AmazonQuickSight', 'Amazon Quick Sight', 'an optional tech label', 'an optional description')
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonQuickSight
include('aws-q1-2023/Architecture/Analytics/AmazonQuickSight')

' renders the element
AmazonQuickSight('AmazonQuickSight', 'Amazon Quick Sight', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonQuickSightCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonQuickSightCard
include('aws-q1-2023/Architecture/Analytics/AmazonQuickSight')

' renders the element
AmazonQuickSightCard('AmazonQuickSightCard', 'Amazon Quick Sight Card', 'an optional description')
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonQuickSightCard
include('aws-q1-2023/Architecture/Analytics/AmazonQuickSight')

' renders the element
AmazonQuickSightCard('AmazonQuickSightCard', 'Amazon Quick Sight Card', 'an optional description')
@enduml
```

## AmazonQuickSightGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonQuickSightGroup
include('aws-q1-2023/Architecture/Analytics/AmazonQuickSight')

' renders the element
AmazonQuickSightGroup('AmazonQuickSightGroup', 'Amazon Quick Sight Group', 'an optional tech label') {
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonQuickSightGroup
include('aws-q1-2023/Architecture/Analytics/AmazonQuickSight')

' renders the element
AmazonQuickSightGroup('AmazonQuickSightGroup', 'Amazon Quick Sight Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

