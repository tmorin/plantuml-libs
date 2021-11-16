# AwsIoTHardwareBoard


```text
aws-q3-2021/Resource/LoT/AwsIoTHardwareBoard
```

```text
include('aws-q3-2021/Resource/LoT/AwsIoTHardwareBoard')
```



| Illustration | AwsIoTHardwareBoard | AwsIoTHardwareBoardCard | AwsIoTHardwareBoardGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Resource/LoT/AwsIoTHardwareBoard.png) | ![illustration for AwsIoTHardwareBoard](../../../aws-q3-2021/Resource/LoT/AwsIoTHardwareBoard.Local.png) | ![illustration for AwsIoTHardwareBoardCard](../../../aws-q3-2021/Resource/LoT/AwsIoTHardwareBoardCard.Local.png) | ![illustration for AwsIoTHardwareBoardGroup](../../../aws-q3-2021/Resource/LoT/AwsIoTHardwareBoardGroup.Local.png) |




## AwsIoTHardwareBoard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsIoTHardwareBoard
include('aws-q3-2021/Resource/LoT/AwsIoTHardwareBoard')

' renders the element
AwsIoTHardwareBoard('AwsIoTHardwareBoard', 'Aws Io T Hardware Board', 'an optional tech label')
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

' loads the Item which embeds the element AwsIoTHardwareBoard
include('aws-q3-2021/Resource/LoT/AwsIoTHardwareBoard')

' renders the element
AwsIoTHardwareBoard('AwsIoTHardwareBoard', 'Aws Io T Hardware Board', 'an optional tech label')
@enduml
```

## AwsIoTHardwareBoardCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsIoTHardwareBoardCard
include('aws-q3-2021/Resource/LoT/AwsIoTHardwareBoard')

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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsIoTHardwareBoardCard
include('aws-q3-2021/Resource/LoT/AwsIoTHardwareBoard')

' renders the element
AwsIoTHardwareBoardCard('AwsIoTHardwareBoardCard', 'Aws Io T Hardware Board Card', 'an optional description')
@enduml
```

## AwsIoTHardwareBoardGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsIoTHardwareBoardGroup
include('aws-q3-2021/Resource/LoT/AwsIoTHardwareBoard')

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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsIoTHardwareBoardGroup
include('aws-q3-2021/Resource/LoT/AwsIoTHardwareBoard')

' renders the element
AwsIoTHardwareBoardGroup('AwsIoTHardwareBoardGroup', 'Aws Io T Hardware Board Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

