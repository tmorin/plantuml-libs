# AwsMarketplaceLight


```text
aws-q2-2023/Architecture/GeneralIcons/AwsMarketplaceLight
```

```text
include('aws-q2-2023/Architecture/GeneralIcons/AwsMarketplaceLight')
```



| Illustration | AwsMarketplaceLight | AwsMarketplaceLightCard | AwsMarketplaceLightGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2023/Architecture/GeneralIcons/AwsMarketplaceLight.png) | ![illustration for AwsMarketplaceLight](../../../aws-q2-2023/Architecture/GeneralIcons/AwsMarketplaceLight.Local.png) | ![illustration for AwsMarketplaceLightCard](../../../aws-q2-2023/Architecture/GeneralIcons/AwsMarketplaceLightCard.Local.png) | ![illustration for AwsMarketplaceLightGroup](../../../aws-q2-2023/Architecture/GeneralIcons/AwsMarketplaceLightGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsMarketplaceLightXs>`
- `<$AwsMarketplaceLightSm>`
- `<$AwsMarketplaceLightMd>`
- `<$AwsMarketplaceLightLg>`





## AwsMarketplaceLight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsMarketplaceLight
include('aws-q2-2023/Architecture/GeneralIcons/AwsMarketplaceLight')

' renders the element
AwsMarketplaceLight('AwsMarketplaceLight', 'Aws Marketplace Light', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsMarketplaceLight
include('aws-q2-2023/Architecture/GeneralIcons/AwsMarketplaceLight')

' renders the element
AwsMarketplaceLight('AwsMarketplaceLight', 'Aws Marketplace Light', 'an optional tech label', 'an optional description')
@enduml
```

## AwsMarketplaceLightCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsMarketplaceLightCard
include('aws-q2-2023/Architecture/GeneralIcons/AwsMarketplaceLight')

' renders the element
AwsMarketplaceLightCard('AwsMarketplaceLightCard', 'Aws Marketplace Light Card', 'an optional description')
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

' loads the Item which embeds the element AwsMarketplaceLightCard
include('aws-q2-2023/Architecture/GeneralIcons/AwsMarketplaceLight')

' renders the element
AwsMarketplaceLightCard('AwsMarketplaceLightCard', 'Aws Marketplace Light Card', 'an optional description')
@enduml
```

## AwsMarketplaceLightGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AwsMarketplaceLightGroup
include('aws-q2-2023/Architecture/GeneralIcons/AwsMarketplaceLight')

' renders the element
AwsMarketplaceLightGroup('AwsMarketplaceLightGroup', 'Aws Marketplace Light Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsMarketplaceLightGroup
include('aws-q2-2023/Architecture/GeneralIcons/AwsMarketplaceLight')

' renders the element
AwsMarketplaceLightGroup('AwsMarketplaceLightGroup', 'Aws Marketplace Light Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

