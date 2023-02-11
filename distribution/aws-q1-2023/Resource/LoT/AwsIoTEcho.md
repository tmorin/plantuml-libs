# AwsIoTEcho


```text
aws-q1-2023/Resource/LoT/AwsIoTEcho
```

```text
include('aws-q1-2023/Resource/LoT/AwsIoTEcho')
```



| Illustration | AwsIoTEcho | AwsIoTEchoCard | AwsIoTEchoGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Resource/LoT/AwsIoTEcho.png) | ![illustration for AwsIoTEcho](../../../aws-q1-2023/Resource/LoT/AwsIoTEcho.Local.png) | ![illustration for AwsIoTEchoCard](../../../aws-q1-2023/Resource/LoT/AwsIoTEchoCard.Local.png) | ![illustration for AwsIoTEchoGroup](../../../aws-q1-2023/Resource/LoT/AwsIoTEchoGroup.Local.png) |




## AwsIoTEcho

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsIoTEcho
include('aws-q1-2023/Resource/LoT/AwsIoTEcho')

' renders the element
AwsIoTEcho('AwsIoTEcho', 'Aws Io T Echo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsIoTEcho
include('aws-q1-2023/Resource/LoT/AwsIoTEcho')

' renders the element
AwsIoTEcho('AwsIoTEcho', 'Aws Io T Echo', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTEchoCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsIoTEchoCard
include('aws-q1-2023/Resource/LoT/AwsIoTEcho')

' renders the element
AwsIoTEchoCard('AwsIoTEchoCard', 'Aws Io T Echo Card', 'an optional description')
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

' loads the Item which embeds the element AwsIoTEchoCard
include('aws-q1-2023/Resource/LoT/AwsIoTEcho')

' renders the element
AwsIoTEchoCard('AwsIoTEchoCard', 'Aws Io T Echo Card', 'an optional description')
@enduml
```

## AwsIoTEchoGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AwsIoTEchoGroup
include('aws-q1-2023/Resource/LoT/AwsIoTEcho')

' renders the element
AwsIoTEchoGroup('AwsIoTEchoGroup', 'Aws Io T Echo Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsIoTEchoGroup
include('aws-q1-2023/Resource/LoT/AwsIoTEcho')

' renders the element
AwsIoTEchoGroup('AwsIoTEchoGroup', 'Aws Io T Echo Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

