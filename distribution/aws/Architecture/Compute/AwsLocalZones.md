# AwsLocalZones


```text
aws/Architecture/Compute/AwsLocalZones
```

```text
include('aws/Architecture/Compute/AwsLocalZones')
```



| Illustration | AwsLocalZones | AwsLocalZonesCard | AwsLocalZonesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Architecture/Compute/AwsLocalZones.png) | ![illustration for AwsLocalZones](../../../aws/Architecture/Compute/AwsLocalZones.Local.png) | ![illustration for AwsLocalZonesCard](../../../aws/Architecture/Compute/AwsLocalZonesCard.Local.png) | ![illustration for AwsLocalZonesGroup](../../../aws/Architecture/Compute/AwsLocalZonesGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsLocalZonesXs>`
- `<$AwsLocalZonesSm>`
- `<$AwsLocalZonesMd>`
- `<$AwsLocalZonesLg>`





## AwsLocalZones

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsLocalZones
include('aws/Architecture/Compute/AwsLocalZones')

' renders the element
AwsLocalZones('AwsLocalZones', 'Aws Local Zones', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsLocalZones
include('aws/Architecture/Compute/AwsLocalZones')

' renders the element
AwsLocalZones('AwsLocalZones', 'Aws Local Zones', 'an optional tech label', 'an optional description')
@enduml
```

## AwsLocalZonesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsLocalZonesCard
include('aws/Architecture/Compute/AwsLocalZones')

' renders the element
AwsLocalZonesCard('AwsLocalZonesCard', 'Aws Local Zones Card', 'an optional description')
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

' loads the Item which embeds the element AwsLocalZonesCard
include('aws/Architecture/Compute/AwsLocalZones')

' renders the element
AwsLocalZonesCard('AwsLocalZonesCard', 'Aws Local Zones Card', 'an optional description')
@enduml
```

## AwsLocalZonesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsLocalZonesGroup
include('aws/Architecture/Compute/AwsLocalZones')

' renders the element
AwsLocalZonesGroup('AwsLocalZonesGroup', 'Aws Local Zones Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsLocalZonesGroup
include('aws/Architecture/Compute/AwsLocalZones')

' renders the element
AwsLocalZonesGroup('AwsLocalZonesGroup', 'Aws Local Zones Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

