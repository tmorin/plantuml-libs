# AmazonGameLift


```text
aws-q3-2021/Architecture/GameTech/AmazonGameLift
```

```text
include('aws-q3-2021/Architecture/GameTech/AmazonGameLift')
```



| Illustration | AmazonGameLift | AmazonGameLiftCard | AmazonGameLiftGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/GameTech/AmazonGameLift.png) | ![illustration for AmazonGameLift](../../../aws-q3-2021/Architecture/GameTech/AmazonGameLift.Local.png) | ![illustration for AmazonGameLiftCard](../../../aws-q3-2021/Architecture/GameTech/AmazonGameLiftCard.Local.png) | ![illustration for AmazonGameLiftGroup](../../../aws-q3-2021/Architecture/GameTech/AmazonGameLiftGroup.Local.png) |




## AmazonGameLift

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonGameLift
include('aws-q3-2021/Architecture/GameTech/AmazonGameLift')

' renders the element
AmazonGameLift('AmazonGameLift', 'Amazon Game Lift', 'an optional tech label')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonGameLift
include('aws-q3-2021/Architecture/GameTech/AmazonGameLift')

' renders the element
AmazonGameLift('AmazonGameLift', 'Amazon Game Lift', 'an optional tech label')
@enduml
```

## AmazonGameLiftCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonGameLiftCard
include('aws-q3-2021/Architecture/GameTech/AmazonGameLift')

' renders the element
AmazonGameLiftCard('AmazonGameLiftCard', 'Amazon Game Lift Card', 'an optional description')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonGameLiftCard
include('aws-q3-2021/Architecture/GameTech/AmazonGameLift')

' renders the element
AmazonGameLiftCard('AmazonGameLiftCard', 'Amazon Game Lift Card', 'an optional description')
@enduml
```

## AmazonGameLiftGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonGameLiftGroup
include('aws-q3-2021/Architecture/GameTech/AmazonGameLift')

' renders the element
AmazonGameLiftGroup('AmazonGameLiftGroup', 'Amazon Game Lift Group', 'an optional tech label') {
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonGameLiftGroup
include('aws-q3-2021/Architecture/GameTech/AmazonGameLift')

' renders the element
AmazonGameLiftGroup('AmazonGameLiftGroup', 'Amazon Game Lift Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

