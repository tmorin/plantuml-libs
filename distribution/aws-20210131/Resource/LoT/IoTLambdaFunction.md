# IoTLambdaFunction


```text
aws-20210131/Resource/LoT/IoTLambdaFunction
```

```text
include('aws-20210131/Resource/LoT/IoTLambdaFunction')
```



| Illustration | IoTLambdaFunction | IoTLambdaFunctionCard | IoTLambdaFunctionGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/LoT/IoTLambdaFunction.png) | ![illustration for IoTLambdaFunction](../../../aws-20210131/Resource/LoT/IoTLambdaFunction.Local.png) | ![illustration for IoTLambdaFunctionCard](../../../aws-20210131/Resource/LoT/IoTLambdaFunctionCard.Local.png) | ![illustration for IoTLambdaFunctionGroup](../../../aws-20210131/Resource/LoT/IoTLambdaFunctionGroup.Local.png) |




## IoTLambdaFunction

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTLambdaFunction
include('aws-20210131/Resource/LoT/IoTLambdaFunction')

' renders the element
IoTLambdaFunction('IoTLambdaFunction', 'Io T Lambda Function', 'an optional tech label')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTLambdaFunction
include('aws-20210131/Resource/LoT/IoTLambdaFunction')

' renders the element
IoTLambdaFunction('IoTLambdaFunction', 'Io T Lambda Function', 'an optional tech label')
@enduml
```

## IoTLambdaFunctionCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTLambdaFunctionCard
include('aws-20210131/Resource/LoT/IoTLambdaFunction')

' renders the element
IoTLambdaFunctionCard('IoTLambdaFunctionCard', 'Io T Lambda Function Card', 'an optional description')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTLambdaFunctionCard
include('aws-20210131/Resource/LoT/IoTLambdaFunction')

' renders the element
IoTLambdaFunctionCard('IoTLambdaFunctionCard', 'Io T Lambda Function Card', 'an optional description')
@enduml
```

## IoTLambdaFunctionGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTLambdaFunctionGroup
include('aws-20210131/Resource/LoT/IoTLambdaFunction')

' renders the element
IoTLambdaFunctionGroup('IoTLambdaFunctionGroup', 'Io T Lambda Function Group', 'an optional tech label') {
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTLambdaFunctionGroup
include('aws-20210131/Resource/LoT/IoTLambdaFunction')

' renders the element
IoTLambdaFunctionGroup('IoTLambdaFunctionGroup', 'Io T Lambda Function Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

