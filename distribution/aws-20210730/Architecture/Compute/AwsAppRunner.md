# AwsAppRunner


```text
aws-20210730/Architecture/Compute/AwsAppRunner
```

```text
include('aws-20210730/Architecture/Compute/AwsAppRunner')
```



| Illustration | AwsAppRunner | AwsAppRunnerCard | AwsAppRunnerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Architecture/Compute/AwsAppRunner.png) | ![illustration for AwsAppRunner](../../../aws-20210730/Architecture/Compute/AwsAppRunner.Local.png) | ![illustration for AwsAppRunnerCard](../../../aws-20210730/Architecture/Compute/AwsAppRunnerCard.Local.png) | ![illustration for AwsAppRunnerGroup](../../../aws-20210730/Architecture/Compute/AwsAppRunnerGroup.Local.png) |




## AwsAppRunner

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsAppRunner
include('aws-20210730/Architecture/Compute/AwsAppRunner')

' renders the element
AwsAppRunner('AwsAppRunner', 'Aws App Runner', 'an optional tech label')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsAppRunner
include('aws-20210730/Architecture/Compute/AwsAppRunner')

' renders the element
AwsAppRunner('AwsAppRunner', 'Aws App Runner', 'an optional tech label')
@enduml
```

## AwsAppRunnerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsAppRunnerCard
include('aws-20210730/Architecture/Compute/AwsAppRunner')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsAppRunnerCard
include('aws-20210730/Architecture/Compute/AwsAppRunner')

' renders the element
AwsAppRunnerCard('AwsAppRunnerCard', 'Aws App Runner Card', 'an optional description')
@enduml
```

## AwsAppRunnerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsAppRunnerGroup
include('aws-20210730/Architecture/Compute/AwsAppRunner')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsAppRunnerGroup
include('aws-20210730/Architecture/Compute/AwsAppRunner')

' renders the element
AwsAppRunnerGroup('AwsAppRunnerGroup', 'Aws App Runner Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```
