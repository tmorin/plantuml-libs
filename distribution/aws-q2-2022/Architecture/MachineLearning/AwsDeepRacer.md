# AwsDeepRacer


```text
aws-q2-2022/Architecture/MachineLearning/AwsDeepRacer
```

```text
include('aws-q2-2022/Architecture/MachineLearning/AwsDeepRacer')
```



| Illustration | AwsDeepRacer | AwsDeepRacerCard | AwsDeepRacerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2022/Architecture/MachineLearning/AwsDeepRacer.png) | ![illustration for AwsDeepRacer](../../../aws-q2-2022/Architecture/MachineLearning/AwsDeepRacer.Local.png) | ![illustration for AwsDeepRacerCard](../../../aws-q2-2022/Architecture/MachineLearning/AwsDeepRacerCard.Local.png) | ![illustration for AwsDeepRacerGroup](../../../aws-q2-2022/Architecture/MachineLearning/AwsDeepRacerGroup.Local.png) |




## AwsDeepRacer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsDeepRacer
include('aws-q2-2022/Architecture/MachineLearning/AwsDeepRacer')

' renders the element
AwsDeepRacer('AwsDeepRacer', 'Aws Deep Racer', 'an optional tech label')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsDeepRacer
include('aws-q2-2022/Architecture/MachineLearning/AwsDeepRacer')

' renders the element
AwsDeepRacer('AwsDeepRacer', 'Aws Deep Racer', 'an optional tech label')
@enduml
```

## AwsDeepRacerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsDeepRacerCard
include('aws-q2-2022/Architecture/MachineLearning/AwsDeepRacer')

' renders the element
AwsDeepRacerCard('AwsDeepRacerCard', 'Aws Deep Racer Card', 'an optional description')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsDeepRacerCard
include('aws-q2-2022/Architecture/MachineLearning/AwsDeepRacer')

' renders the element
AwsDeepRacerCard('AwsDeepRacerCard', 'Aws Deep Racer Card', 'an optional description')
@enduml
```

## AwsDeepRacerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsDeepRacerGroup
include('aws-q2-2022/Architecture/MachineLearning/AwsDeepRacer')

' renders the element
AwsDeepRacerGroup('AwsDeepRacerGroup', 'Aws Deep Racer Group', 'an optional tech label') {
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsDeepRacerGroup
include('aws-q2-2022/Architecture/MachineLearning/AwsDeepRacer')

' renders the element
AwsDeepRacerGroup('AwsDeepRacerGroup', 'Aws Deep Racer Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

