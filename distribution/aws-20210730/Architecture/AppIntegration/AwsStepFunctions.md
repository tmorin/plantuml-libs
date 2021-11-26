# AwsStepFunctions


```text
aws-20210730/Architecture/AppIntegration/AwsStepFunctions
```

```text
include('aws-20210730/Architecture/AppIntegration/AwsStepFunctions')
```



| Illustration | AwsStepFunctions | AwsStepFunctionsCard | AwsStepFunctionsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Architecture/AppIntegration/AwsStepFunctions.png) | ![illustration for AwsStepFunctions](../../../aws-20210730/Architecture/AppIntegration/AwsStepFunctions.Local.png) | ![illustration for AwsStepFunctionsCard](../../../aws-20210730/Architecture/AppIntegration/AwsStepFunctionsCard.Local.png) | ![illustration for AwsStepFunctionsGroup](../../../aws-20210730/Architecture/AppIntegration/AwsStepFunctionsGroup.Local.png) |




## AwsStepFunctions

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsStepFunctions
include('aws-20210730/Architecture/AppIntegration/AwsStepFunctions')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsStepFunctions
include('aws-20210730/Architecture/AppIntegration/AwsStepFunctions')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsStepFunctionsCard
include('aws-20210730/Architecture/AppIntegration/AwsStepFunctions')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsStepFunctionsCard
include('aws-20210730/Architecture/AppIntegration/AwsStepFunctions')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsStepFunctionsGroup
include('aws-20210730/Architecture/AppIntegration/AwsStepFunctions')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsStepFunctionsGroup
include('aws-20210730/Architecture/AppIntegration/AwsStepFunctions')

' renders the element
AwsStepFunctionsGroup('AwsStepFunctionsGroup', 'Aws Step Functions Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

