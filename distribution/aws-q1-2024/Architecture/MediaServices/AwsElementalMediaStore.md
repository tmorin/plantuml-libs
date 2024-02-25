# AwsElementalMediaStore


```text
aws-q1-2024/Architecture/MediaServices/AwsElementalMediaStore
```

```text
include('aws-q1-2024/Architecture/MediaServices/AwsElementalMediaStore')
```



| Illustration | AwsElementalMediaStore | AwsElementalMediaStoreCard | AwsElementalMediaStoreGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2024/Architecture/MediaServices/AwsElementalMediaStore.png) | ![illustration for AwsElementalMediaStore](../../../aws-q1-2024/Architecture/MediaServices/AwsElementalMediaStore.Local.png) | ![illustration for AwsElementalMediaStoreCard](../../../aws-q1-2024/Architecture/MediaServices/AwsElementalMediaStoreCard.Local.png) | ![illustration for AwsElementalMediaStoreGroup](../../../aws-q1-2024/Architecture/MediaServices/AwsElementalMediaStoreGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsElementalMediaStoreXs>`
- `<$AwsElementalMediaStoreSm>`
- `<$AwsElementalMediaStoreMd>`
- `<$AwsElementalMediaStoreLg>`





## AwsElementalMediaStore

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsElementalMediaStore
include('aws-q1-2024/Architecture/MediaServices/AwsElementalMediaStore')

' renders the element
AwsElementalMediaStore('AwsElementalMediaStore', 'Aws Elemental Media Store', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsElementalMediaStore
include('aws-q1-2024/Architecture/MediaServices/AwsElementalMediaStore')

' renders the element
AwsElementalMediaStore('AwsElementalMediaStore', 'Aws Elemental Media Store', 'an optional tech label', 'an optional description')
@enduml
```

## AwsElementalMediaStoreCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsElementalMediaStoreCard
include('aws-q1-2024/Architecture/MediaServices/AwsElementalMediaStore')

' renders the element
AwsElementalMediaStoreCard('AwsElementalMediaStoreCard', 'Aws Elemental Media Store Card', 'an optional description')
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

' loads the Item which embeds the element AwsElementalMediaStoreCard
include('aws-q1-2024/Architecture/MediaServices/AwsElementalMediaStore')

' renders the element
AwsElementalMediaStoreCard('AwsElementalMediaStoreCard', 'Aws Elemental Media Store Card', 'an optional description')
@enduml
```

## AwsElementalMediaStoreGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsElementalMediaStoreGroup
include('aws-q1-2024/Architecture/MediaServices/AwsElementalMediaStore')

' renders the element
AwsElementalMediaStoreGroup('AwsElementalMediaStoreGroup', 'Aws Elemental Media Store Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsElementalMediaStoreGroup
include('aws-q1-2024/Architecture/MediaServices/AwsElementalMediaStore')

' renders the element
AwsElementalMediaStoreGroup('AwsElementalMediaStoreGroup', 'Aws Elemental Media Store Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

