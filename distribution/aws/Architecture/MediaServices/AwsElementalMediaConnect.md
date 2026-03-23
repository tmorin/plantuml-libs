# AwsElementalMediaConnect


```text
aws/Architecture/MediaServices/AwsElementalMediaConnect
```

```text
include('aws/Architecture/MediaServices/AwsElementalMediaConnect')
```



| Illustration | AwsElementalMediaConnect | AwsElementalMediaConnectCard | AwsElementalMediaConnectGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Architecture/MediaServices/AwsElementalMediaConnect.png) | ![illustration for AwsElementalMediaConnect](../../../aws/Architecture/MediaServices/AwsElementalMediaConnect.Local.png) | ![illustration for AwsElementalMediaConnectCard](../../../aws/Architecture/MediaServices/AwsElementalMediaConnectCard.Local.png) | ![illustration for AwsElementalMediaConnectGroup](../../../aws/Architecture/MediaServices/AwsElementalMediaConnectGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsElementalMediaConnectXs>`
- `<$AwsElementalMediaConnectSm>`
- `<$AwsElementalMediaConnectMd>`
- `<$AwsElementalMediaConnectLg>`





## AwsElementalMediaConnect

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsElementalMediaConnect
include('aws/Architecture/MediaServices/AwsElementalMediaConnect')

' renders the element
AwsElementalMediaConnect('AwsElementalMediaConnect', 'Aws Elemental Media Connect', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsElementalMediaConnect
include('aws/Architecture/MediaServices/AwsElementalMediaConnect')

' renders the element
AwsElementalMediaConnect('AwsElementalMediaConnect', 'Aws Elemental Media Connect', 'an optional tech label', 'an optional description')
@enduml
```

## AwsElementalMediaConnectCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsElementalMediaConnectCard
include('aws/Architecture/MediaServices/AwsElementalMediaConnect')

' renders the element
AwsElementalMediaConnectCard('AwsElementalMediaConnectCard', 'Aws Elemental Media Connect Card', 'an optional description')
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

' loads the Item which embeds the element AwsElementalMediaConnectCard
include('aws/Architecture/MediaServices/AwsElementalMediaConnect')

' renders the element
AwsElementalMediaConnectCard('AwsElementalMediaConnectCard', 'Aws Elemental Media Connect Card', 'an optional description')
@enduml
```

## AwsElementalMediaConnectGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsElementalMediaConnectGroup
include('aws/Architecture/MediaServices/AwsElementalMediaConnect')

' renders the element
AwsElementalMediaConnectGroup('AwsElementalMediaConnectGroup', 'Aws Elemental Media Connect Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsElementalMediaConnectGroup
include('aws/Architecture/MediaServices/AwsElementalMediaConnect')

' renders the element
AwsElementalMediaConnectGroup('AwsElementalMediaConnectGroup', 'Aws Elemental Media Connect Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

