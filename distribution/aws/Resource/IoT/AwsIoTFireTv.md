# AwsIoTFireTv


```text
aws/Resource/IoT/AwsIoTFireTv
```

```text
include('aws/Resource/IoT/AwsIoTFireTv')
```



| Illustration | AwsIoTFireTv | AwsIoTFireTvCard | AwsIoTFireTvGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Resource/IoT/AwsIoTFireTv.png) | ![illustration for AwsIoTFireTv](../../../aws/Resource/IoT/AwsIoTFireTv.Local.png) | ![illustration for AwsIoTFireTvCard](../../../aws/Resource/IoT/AwsIoTFireTvCard.Local.png) | ![illustration for AwsIoTFireTvGroup](../../../aws/Resource/IoT/AwsIoTFireTvGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsIoTFireTvXs>`
- `<$AwsIoTFireTvSm>`
- `<$AwsIoTFireTvMd>`
- `<$AwsIoTFireTvLg>`





## AwsIoTFireTv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsIoTFireTv
include('aws/Resource/IoT/AwsIoTFireTv')

' renders the element
AwsIoTFireTv('AwsIoTFireTv', 'Aws Io T Fire Tv', 'an optional tech label', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AwsIoTFireTv
include('aws/Resource/IoT/AwsIoTFireTv')

' renders the element
AwsIoTFireTv('AwsIoTFireTv', 'Aws Io T Fire Tv', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTFireTvCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsIoTFireTvCard
include('aws/Resource/IoT/AwsIoTFireTv')

' renders the element
AwsIoTFireTvCard('AwsIoTFireTvCard', 'Aws Io T Fire Tv Card', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AwsIoTFireTvCard
include('aws/Resource/IoT/AwsIoTFireTv')

' renders the element
AwsIoTFireTvCard('AwsIoTFireTvCard', 'Aws Io T Fire Tv Card', 'an optional description')
@enduml
```

## AwsIoTFireTvGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsIoTFireTvGroup
include('aws/Resource/IoT/AwsIoTFireTv')

' renders the element
AwsIoTFireTvGroup('AwsIoTFireTvGroup', 'Aws Io T Fire Tv Group', 'an optional tech label') {
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
include('aws/bootstrap')

' loads the Item which embeds the element AwsIoTFireTvGroup
include('aws/Resource/IoT/AwsIoTFireTv')

' renders the element
AwsIoTFireTvGroup('AwsIoTFireTvGroup', 'Aws Io T Fire Tv Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

