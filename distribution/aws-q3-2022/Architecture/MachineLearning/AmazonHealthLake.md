# AmazonHealthLake


```text
aws-q3-2022/Architecture/MachineLearning/AmazonHealthLake
```

```text
include('aws-q3-2022/Architecture/MachineLearning/AmazonHealthLake')
```



| Illustration | AmazonHealthLake | AmazonHealthLakeCard | AmazonHealthLakeGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2022/Architecture/MachineLearning/AmazonHealthLake.png) | ![illustration for AmazonHealthLake](../../../aws-q3-2022/Architecture/MachineLearning/AmazonHealthLake.Local.png) | ![illustration for AmazonHealthLakeCard](../../../aws-q3-2022/Architecture/MachineLearning/AmazonHealthLakeCard.Local.png) | ![illustration for AmazonHealthLakeGroup](../../../aws-q3-2022/Architecture/MachineLearning/AmazonHealthLakeGroup.Local.png) |




## AmazonHealthLake

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonHealthLake
include('aws-q3-2022/Architecture/MachineLearning/AmazonHealthLake')

' renders the element
AmazonHealthLake('AmazonHealthLake', 'Amazon Health Lake', 'an optional tech label', 'an optional description')
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonHealthLake
include('aws-q3-2022/Architecture/MachineLearning/AmazonHealthLake')

' renders the element
AmazonHealthLake('AmazonHealthLake', 'Amazon Health Lake', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonHealthLakeCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonHealthLakeCard
include('aws-q3-2022/Architecture/MachineLearning/AmazonHealthLake')

' renders the element
AmazonHealthLakeCard('AmazonHealthLakeCard', 'Amazon Health Lake Card', 'an optional description')
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonHealthLakeCard
include('aws-q3-2022/Architecture/MachineLearning/AmazonHealthLake')

' renders the element
AmazonHealthLakeCard('AmazonHealthLakeCard', 'Amazon Health Lake Card', 'an optional description')
@enduml
```

## AmazonHealthLakeGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonHealthLakeGroup
include('aws-q3-2022/Architecture/MachineLearning/AmazonHealthLake')

' renders the element
AmazonHealthLakeGroup('AmazonHealthLakeGroup', 'Amazon Health Lake Group', 'an optional tech label') {
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonHealthLakeGroup
include('aws-q3-2022/Architecture/MachineLearning/AmazonHealthLake')

' renders the element
AmazonHealthLakeGroup('AmazonHealthLakeGroup', 'Amazon Health Lake Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

