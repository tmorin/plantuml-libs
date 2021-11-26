# AwsIoTLambdaFunction


```text
aws-20210730/Resource/LoT/AwsIoTLambdaFunction
```

```text
include('aws-20210730/Resource/LoT/AwsIoTLambdaFunction')
```



| Illustration | AwsIoTLambdaFunction | AwsIoTLambdaFunctionCard | AwsIoTLambdaFunctionGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Resource/LoT/AwsIoTLambdaFunction.png) | ![illustration for AwsIoTLambdaFunction](../../../aws-20210730/Resource/LoT/AwsIoTLambdaFunction.Local.png) | ![illustration for AwsIoTLambdaFunctionCard](../../../aws-20210730/Resource/LoT/AwsIoTLambdaFunctionCard.Local.png) | ![illustration for AwsIoTLambdaFunctionGroup](../../../aws-20210730/Resource/LoT/AwsIoTLambdaFunctionGroup.Local.png) |




## AwsIoTLambdaFunction

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTLambdaFunction
include('aws-20210730/Resource/LoT/AwsIoTLambdaFunction')

' renders the element
AwsIoTLambdaFunction('AwsIoTLambdaFunction', 'Aws Io T Lambda Function', 'an optional tech label')
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

' loads the Item which embeds the element AwsIoTLambdaFunction
include('aws-20210730/Resource/LoT/AwsIoTLambdaFunction')

' renders the element
AwsIoTLambdaFunction('AwsIoTLambdaFunction', 'Aws Io T Lambda Function', 'an optional tech label')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTLambdaFunctionCard
include('aws-20210730/Resource/LoT/AwsIoTLambdaFunction')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTLambdaFunctionCard
include('aws-20210730/Resource/LoT/AwsIoTLambdaFunction')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTLambdaFunctionGroup
include('aws-20210730/Resource/LoT/AwsIoTLambdaFunction')

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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsIoTLambdaFunctionGroup
include('aws-20210730/Resource/LoT/AwsIoTLambdaFunction')

' renders the element
AwsIoTLambdaFunctionGroup('AwsIoTLambdaFunctionGroup', 'Aws Io T Lambda Function Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

