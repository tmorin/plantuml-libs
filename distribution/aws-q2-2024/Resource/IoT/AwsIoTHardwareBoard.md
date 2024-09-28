# AwsIoTHardwareBoard


```text
aws-q2-2024/Resource/IoT/AwsIoTHardwareBoard
```

```text
include('aws-q2-2024/Resource/IoT/AwsIoTHardwareBoard')
```



| Illustration | AwsIoTHardwareBoard | AwsIoTHardwareBoardCard | AwsIoTHardwareBoardGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2024/Resource/IoT/AwsIoTHardwareBoard.png) | ![illustration for AwsIoTHardwareBoard](../../../aws-q2-2024/Resource/IoT/AwsIoTHardwareBoard.Local.png) | ![illustration for AwsIoTHardwareBoardCard](../../../aws-q2-2024/Resource/IoT/AwsIoTHardwareBoardCard.Local.png) | ![illustration for AwsIoTHardwareBoardGroup](../../../aws-q2-2024/Resource/IoT/AwsIoTHardwareBoardGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsIoTHardwareBoardXs>`
- `<$AwsIoTHardwareBoardSm>`
- `<$AwsIoTHardwareBoardMd>`
- `<$AwsIoTHardwareBoardLg>`





## AwsIoTHardwareBoard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsIoTHardwareBoard
include('aws-q2-2024/Resource/IoT/AwsIoTHardwareBoard')

' renders the element
AwsIoTHardwareBoard('AwsIoTHardwareBoard', 'Aws Io T Hardware Board', 'an optional tech label', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsIoTHardwareBoard
include('aws-q2-2024/Resource/IoT/AwsIoTHardwareBoard')

' renders the element
AwsIoTHardwareBoard('AwsIoTHardwareBoard', 'Aws Io T Hardware Board', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTHardwareBoardCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsIoTHardwareBoardCard
include('aws-q2-2024/Resource/IoT/AwsIoTHardwareBoard')

' renders the element
AwsIoTHardwareBoardCard('AwsIoTHardwareBoardCard', 'Aws Io T Hardware Board Card', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsIoTHardwareBoardCard
include('aws-q2-2024/Resource/IoT/AwsIoTHardwareBoard')

' renders the element
AwsIoTHardwareBoardCard('AwsIoTHardwareBoardCard', 'Aws Io T Hardware Board Card', 'an optional description')
@enduml
```

## AwsIoTHardwareBoardGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsIoTHardwareBoardGroup
include('aws-q2-2024/Resource/IoT/AwsIoTHardwareBoard')

' renders the element
AwsIoTHardwareBoardGroup('AwsIoTHardwareBoardGroup', 'Aws Io T Hardware Board Group', 'an optional tech label') {
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsIoTHardwareBoardGroup
include('aws-q2-2024/Resource/IoT/AwsIoTHardwareBoard')

' renders the element
AwsIoTHardwareBoardGroup('AwsIoTHardwareBoardGroup', 'Aws Io T Hardware Board Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

