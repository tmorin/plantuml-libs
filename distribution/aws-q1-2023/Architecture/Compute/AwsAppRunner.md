# AwsAppRunner


```text
aws-q1-2023/Architecture/Compute/AwsAppRunner
```

```text
include('aws-q1-2023/Architecture/Compute/AwsAppRunner')
```



| Illustration | AwsAppRunner | AwsAppRunnerCard | AwsAppRunnerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Architecture/Compute/AwsAppRunner.png) | ![illustration for AwsAppRunner](../../../aws-q1-2023/Architecture/Compute/AwsAppRunner.Local.png) | ![illustration for AwsAppRunnerCard](../../../aws-q1-2023/Architecture/Compute/AwsAppRunnerCard.Local.png) | ![illustration for AwsAppRunnerGroup](../../../aws-q1-2023/Architecture/Compute/AwsAppRunnerGroup.Local.png) |




## AwsAppRunner

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsAppRunner
include('aws-q1-2023/Architecture/Compute/AwsAppRunner')

' renders the element
AwsAppRunner('AwsAppRunner', 'Aws App Runner', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsAppRunner
include('aws-q1-2023/Architecture/Compute/AwsAppRunner')

' renders the element
AwsAppRunner('AwsAppRunner', 'Aws App Runner', 'an optional tech label', 'an optional description')
@enduml
```

## AwsAppRunnerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsAppRunnerCard
include('aws-q1-2023/Architecture/Compute/AwsAppRunner')

' renders the element
AwsAppRunnerCard('AwsAppRunnerCard', 'Aws App Runner Card', 'an optional description')
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

' loads the Item which embeds the element AwsAppRunnerCard
include('aws-q1-2023/Architecture/Compute/AwsAppRunner')

' renders the element
AwsAppRunnerCard('AwsAppRunnerCard', 'Aws App Runner Card', 'an optional description')
@enduml
```

## AwsAppRunnerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsAppRunnerGroup
include('aws-q1-2023/Architecture/Compute/AwsAppRunner')

' renders the element
AwsAppRunnerGroup('AwsAppRunnerGroup', 'Aws App Runner Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsAppRunnerGroup
include('aws-q1-2023/Architecture/Compute/AwsAppRunner')

' renders the element
AwsAppRunnerGroup('AwsAppRunnerGroup', 'Aws App Runner Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

