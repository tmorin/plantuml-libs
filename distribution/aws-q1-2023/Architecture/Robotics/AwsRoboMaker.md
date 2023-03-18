# AwsRoboMaker


```text
aws-q1-2023/Architecture/Robotics/AwsRoboMaker
```

```text
include('aws-q1-2023/Architecture/Robotics/AwsRoboMaker')
```



| Illustration | AwsRoboMaker | AwsRoboMakerCard | AwsRoboMakerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Architecture/Robotics/AwsRoboMaker.png) | ![illustration for AwsRoboMaker](../../../aws-q1-2023/Architecture/Robotics/AwsRoboMaker.Local.png) | ![illustration for AwsRoboMakerCard](../../../aws-q1-2023/Architecture/Robotics/AwsRoboMakerCard.Local.png) | ![illustration for AwsRoboMakerGroup](../../../aws-q1-2023/Architecture/Robotics/AwsRoboMakerGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsRoboMakerXs>`
- `<$AwsRoboMakerSm>`
- `<$AwsRoboMakerMd>`
- `<$AwsRoboMakerLg>`





## AwsRoboMaker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsRoboMaker
include('aws-q1-2023/Architecture/Robotics/AwsRoboMaker')

' renders the element
AwsRoboMaker('AwsRoboMaker', 'Aws Robo Maker', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsRoboMaker
include('aws-q1-2023/Architecture/Robotics/AwsRoboMaker')

' renders the element
AwsRoboMaker('AwsRoboMaker', 'Aws Robo Maker', 'an optional tech label', 'an optional description')
@enduml
```

## AwsRoboMakerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsRoboMakerCard
include('aws-q1-2023/Architecture/Robotics/AwsRoboMaker')

' renders the element
AwsRoboMakerCard('AwsRoboMakerCard', 'Aws Robo Maker Card', 'an optional description')
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

' loads the Item which embeds the element AwsRoboMakerCard
include('aws-q1-2023/Architecture/Robotics/AwsRoboMaker')

' renders the element
AwsRoboMakerCard('AwsRoboMakerCard', 'Aws Robo Maker Card', 'an optional description')
@enduml
```

## AwsRoboMakerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsRoboMakerGroup
include('aws-q1-2023/Architecture/Robotics/AwsRoboMaker')

' renders the element
AwsRoboMakerGroup('AwsRoboMakerGroup', 'Aws Robo Maker Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsRoboMakerGroup
include('aws-q1-2023/Architecture/Robotics/AwsRoboMaker')

' renders the element
AwsRoboMakerGroup('AwsRoboMakerGroup', 'Aws Robo Maker Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

