# AwsIoTThingGeneric


```text
aws-q2-2023/Resource/IoT/AwsIoTThingGeneric
```

```text
include('aws-q2-2023/Resource/IoT/AwsIoTThingGeneric')
```



| Illustration | AwsIoTThingGeneric | AwsIoTThingGenericCard | AwsIoTThingGenericGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2023/Resource/IoT/AwsIoTThingGeneric.png) | ![illustration for AwsIoTThingGeneric](../../../aws-q2-2023/Resource/IoT/AwsIoTThingGeneric.Local.png) | ![illustration for AwsIoTThingGenericCard](../../../aws-q2-2023/Resource/IoT/AwsIoTThingGenericCard.Local.png) | ![illustration for AwsIoTThingGenericGroup](../../../aws-q2-2023/Resource/IoT/AwsIoTThingGenericGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsIoTThingGenericXs>`
- `<$AwsIoTThingGenericSm>`
- `<$AwsIoTThingGenericMd>`
- `<$AwsIoTThingGenericLg>`





## AwsIoTThingGeneric

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsIoTThingGeneric
include('aws-q2-2023/Resource/IoT/AwsIoTThingGeneric')

' renders the element
AwsIoTThingGeneric('AwsIoTThingGeneric', 'Aws Io T Thing Generic', 'an optional tech label', 'an optional description')
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsIoTThingGeneric
include('aws-q2-2023/Resource/IoT/AwsIoTThingGeneric')

' renders the element
AwsIoTThingGeneric('AwsIoTThingGeneric', 'Aws Io T Thing Generic', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTThingGenericCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsIoTThingGenericCard
include('aws-q2-2023/Resource/IoT/AwsIoTThingGeneric')

' renders the element
AwsIoTThingGenericCard('AwsIoTThingGenericCard', 'Aws Io T Thing Generic Card', 'an optional description')
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsIoTThingGenericCard
include('aws-q2-2023/Resource/IoT/AwsIoTThingGeneric')

' renders the element
AwsIoTThingGenericCard('AwsIoTThingGenericCard', 'Aws Io T Thing Generic Card', 'an optional description')
@enduml
```

## AwsIoTThingGenericGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsIoTThingGenericGroup
include('aws-q2-2023/Resource/IoT/AwsIoTThingGeneric')

' renders the element
AwsIoTThingGenericGroup('AwsIoTThingGenericGroup', 'Aws Io T Thing Generic Group', 'an optional tech label') {
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsIoTThingGenericGroup
include('aws-q2-2023/Resource/IoT/AwsIoTThingGeneric')

' renders the element
AwsIoTThingGenericGroup('AwsIoTThingGenericGroup', 'Aws Io T Thing Generic Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

