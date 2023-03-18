# AwsIoTLambdaFunction


```text
aws-q1-2023/Resource/LoT/AwsIoTLambdaFunction
```

```text
include('aws-q1-2023/Resource/LoT/AwsIoTLambdaFunction')
```



| Illustration | AwsIoTLambdaFunction | AwsIoTLambdaFunctionCard | AwsIoTLambdaFunctionGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Resource/LoT/AwsIoTLambdaFunction.png) | ![illustration for AwsIoTLambdaFunction](../../../aws-q1-2023/Resource/LoT/AwsIoTLambdaFunction.Local.png) | ![illustration for AwsIoTLambdaFunctionCard](../../../aws-q1-2023/Resource/LoT/AwsIoTLambdaFunctionCard.Local.png) | ![illustration for AwsIoTLambdaFunctionGroup](../../../aws-q1-2023/Resource/LoT/AwsIoTLambdaFunctionGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsIoTLambdaFunctionXs>`
- `<$AwsIoTLambdaFunctionSm>`
- `<$AwsIoTLambdaFunctionMd>`
- `<$AwsIoTLambdaFunctionLg>`





## AwsIoTLambdaFunction

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsIoTLambdaFunction
include('aws-q1-2023/Resource/LoT/AwsIoTLambdaFunction')

' renders the element
AwsIoTLambdaFunction('AwsIoTLambdaFunction', 'Aws Io T Lambda Function', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsIoTLambdaFunction
include('aws-q1-2023/Resource/LoT/AwsIoTLambdaFunction')

' renders the element
AwsIoTLambdaFunction('AwsIoTLambdaFunction', 'Aws Io T Lambda Function', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTLambdaFunctionCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsIoTLambdaFunctionCard
include('aws-q1-2023/Resource/LoT/AwsIoTLambdaFunction')

' renders the element
AwsIoTLambdaFunctionCard('AwsIoTLambdaFunctionCard', 'Aws Io T Lambda Function Card', 'an optional description')
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

' loads the Item which embeds the element AwsIoTLambdaFunctionCard
include('aws-q1-2023/Resource/LoT/AwsIoTLambdaFunction')

' renders the element
AwsIoTLambdaFunctionCard('AwsIoTLambdaFunctionCard', 'Aws Io T Lambda Function Card', 'an optional description')
@enduml
```

## AwsIoTLambdaFunctionGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsIoTLambdaFunctionGroup
include('aws-q1-2023/Resource/LoT/AwsIoTLambdaFunction')

' renders the element
AwsIoTLambdaFunctionGroup('AwsIoTLambdaFunctionGroup', 'Aws Io T Lambda Function Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsIoTLambdaFunctionGroup
include('aws-q1-2023/Resource/LoT/AwsIoTLambdaFunction')

' renders the element
AwsIoTLambdaFunctionGroup('AwsIoTLambdaFunctionGroup', 'Aws Io T Lambda Function Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

