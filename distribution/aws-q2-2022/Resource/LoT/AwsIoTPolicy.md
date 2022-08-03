# AwsIoTPolicy


```text
aws-q2-2022/Resource/LoT/AwsIoTPolicy
```

```text
include('aws-q2-2022/Resource/LoT/AwsIoTPolicy')
```



| Illustration | AwsIoTPolicy | AwsIoTPolicyCard | AwsIoTPolicyGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2022/Resource/LoT/AwsIoTPolicy.png) | ![illustration for AwsIoTPolicy](../../../aws-q2-2022/Resource/LoT/AwsIoTPolicy.Local.png) | ![illustration for AwsIoTPolicyCard](../../../aws-q2-2022/Resource/LoT/AwsIoTPolicyCard.Local.png) | ![illustration for AwsIoTPolicyGroup](../../../aws-q2-2022/Resource/LoT/AwsIoTPolicyGroup.Local.png) |




## AwsIoTPolicy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsIoTPolicy
include('aws-q2-2022/Resource/LoT/AwsIoTPolicy')

' renders the element
AwsIoTPolicy('AwsIoTPolicy', 'Aws Io T Policy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsIoTPolicy
include('aws-q2-2022/Resource/LoT/AwsIoTPolicy')

' renders the element
AwsIoTPolicy('AwsIoTPolicy', 'Aws Io T Policy', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTPolicyCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsIoTPolicyCard
include('aws-q2-2022/Resource/LoT/AwsIoTPolicy')

' renders the element
AwsIoTPolicyCard('AwsIoTPolicyCard', 'Aws Io T Policy Card', 'an optional description')
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

' loads the Item which embeds the element AwsIoTPolicyCard
include('aws-q2-2022/Resource/LoT/AwsIoTPolicy')

' renders the element
AwsIoTPolicyCard('AwsIoTPolicyCard', 'Aws Io T Policy Card', 'an optional description')
@enduml
```

## AwsIoTPolicyGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AwsIoTPolicyGroup
include('aws-q2-2022/Resource/LoT/AwsIoTPolicy')

' renders the element
AwsIoTPolicyGroup('AwsIoTPolicyGroup', 'Aws Io T Policy Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsIoTPolicyGroup
include('aws-q2-2022/Resource/LoT/AwsIoTPolicy')

' renders the element
AwsIoTPolicyGroup('AwsIoTPolicyGroup', 'Aws Io T Policy Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

