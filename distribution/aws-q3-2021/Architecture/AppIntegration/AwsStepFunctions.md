# AwsStepFunctions


```text
aws-q3-2021/Architecture/AppIntegration/AwsStepFunctions
```

```text
include('aws-q3-2021/Architecture/AppIntegration/AwsStepFunctions')
```



| Illustration | AwsStepFunctions | AwsStepFunctionsCard | AwsStepFunctionsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/AppIntegration/AwsStepFunctions.png) | ![illustration for AwsStepFunctions](../../../aws-q3-2021/Architecture/AppIntegration/AwsStepFunctions.Local.png) | ![illustration for AwsStepFunctionsCard](../../../aws-q3-2021/Architecture/AppIntegration/AwsStepFunctionsCard.Local.png) | ![illustration for AwsStepFunctionsGroup](../../../aws-q3-2021/Architecture/AppIntegration/AwsStepFunctionsGroup.Local.png) |




## AwsStepFunctions

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsStepFunctions
include('aws-q3-2021/Architecture/AppIntegration/AwsStepFunctions')

' renders the element
AwsStepFunctions('AwsStepFunctions', 'Aws Step Functions', 'an optional tech label')
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

' loads the Item which embeds the element AwsStepFunctions
include('aws-q3-2021/Architecture/AppIntegration/AwsStepFunctions')

' renders the element
AwsStepFunctions('AwsStepFunctions', 'Aws Step Functions', 'an optional tech label')
@enduml
```

## AwsStepFunctionsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsStepFunctionsCard
include('aws-q3-2021/Architecture/AppIntegration/AwsStepFunctions')

' renders the element
AwsStepFunctionsCard('AwsStepFunctionsCard', 'Aws Step Functions Card', 'an optional description')
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

' loads the Item which embeds the element AwsStepFunctionsCard
include('aws-q3-2021/Architecture/AppIntegration/AwsStepFunctions')

' renders the element
AwsStepFunctionsCard('AwsStepFunctionsCard', 'Aws Step Functions Card', 'an optional description')
@enduml
```

## AwsStepFunctionsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsStepFunctionsGroup
include('aws-q3-2021/Architecture/AppIntegration/AwsStepFunctions')

' renders the element
AwsStepFunctionsGroup('AwsStepFunctionsGroup', 'Aws Step Functions Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsStepFunctionsGroup
include('aws-q3-2021/Architecture/AppIntegration/AwsStepFunctions')

' renders the element
AwsStepFunctionsGroup('AwsStepFunctionsGroup', 'Aws Step Functions Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

