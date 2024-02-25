# AwsIoTCore


```text
aws-q1-2024/Architecture/InternetOfThings/AwsIoTCore
```

```text
include('aws-q1-2024/Architecture/InternetOfThings/AwsIoTCore')
```



| Illustration | AwsIoTCore | AwsIoTCoreCard | AwsIoTCoreGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2024/Architecture/InternetOfThings/AwsIoTCore.png) | ![illustration for AwsIoTCore](../../../aws-q1-2024/Architecture/InternetOfThings/AwsIoTCore.Local.png) | ![illustration for AwsIoTCoreCard](../../../aws-q1-2024/Architecture/InternetOfThings/AwsIoTCoreCard.Local.png) | ![illustration for AwsIoTCoreGroup](../../../aws-q1-2024/Architecture/InternetOfThings/AwsIoTCoreGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsIoTCoreXs>`
- `<$AwsIoTCoreSm>`
- `<$AwsIoTCoreMd>`
- `<$AwsIoTCoreLg>`





## AwsIoTCore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsIoTCore
include('aws-q1-2024/Architecture/InternetOfThings/AwsIoTCore')

' renders the element
AwsIoTCore('AwsIoTCore', 'Aws Io T Core', 'an optional tech label', 'an optional description')
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsIoTCore
include('aws-q1-2024/Architecture/InternetOfThings/AwsIoTCore')

' renders the element
AwsIoTCore('AwsIoTCore', 'Aws Io T Core', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTCoreCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsIoTCoreCard
include('aws-q1-2024/Architecture/InternetOfThings/AwsIoTCore')

' renders the element
AwsIoTCoreCard('AwsIoTCoreCard', 'Aws Io T Core Card', 'an optional description')
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsIoTCoreCard
include('aws-q1-2024/Architecture/InternetOfThings/AwsIoTCore')

' renders the element
AwsIoTCoreCard('AwsIoTCoreCard', 'Aws Io T Core Card', 'an optional description')
@enduml
```

## AwsIoTCoreGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsIoTCoreGroup
include('aws-q1-2024/Architecture/InternetOfThings/AwsIoTCore')

' renders the element
AwsIoTCoreGroup('AwsIoTCoreGroup', 'Aws Io T Core Group', 'an optional tech label') {
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsIoTCoreGroup
include('aws-q1-2024/Architecture/InternetOfThings/AwsIoTCore')

' renders the element
AwsIoTCoreGroup('AwsIoTCoreGroup', 'Aws Io T Core Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

