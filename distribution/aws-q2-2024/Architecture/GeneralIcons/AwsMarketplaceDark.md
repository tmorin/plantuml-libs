# AwsMarketplaceDark


```text
aws-q2-2024/Architecture/GeneralIcons/AwsMarketplaceDark
```

```text
include('aws-q2-2024/Architecture/GeneralIcons/AwsMarketplaceDark')
```



| Illustration | AwsMarketplaceDark | AwsMarketplaceDarkCard | AwsMarketplaceDarkGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2024/Architecture/GeneralIcons/AwsMarketplaceDark.png) | ![illustration for AwsMarketplaceDark](../../../aws-q2-2024/Architecture/GeneralIcons/AwsMarketplaceDark.Local.png) | ![illustration for AwsMarketplaceDarkCard](../../../aws-q2-2024/Architecture/GeneralIcons/AwsMarketplaceDarkCard.Local.png) | ![illustration for AwsMarketplaceDarkGroup](../../../aws-q2-2024/Architecture/GeneralIcons/AwsMarketplaceDarkGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsMarketplaceDarkXs>`
- `<$AwsMarketplaceDarkSm>`
- `<$AwsMarketplaceDarkMd>`
- `<$AwsMarketplaceDarkLg>`





## AwsMarketplaceDark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsMarketplaceDark
include('aws-q2-2024/Architecture/GeneralIcons/AwsMarketplaceDark')

' renders the element
AwsMarketplaceDark('AwsMarketplaceDark', 'Aws Marketplace Dark', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AwsMarketplaceDark
include('aws-q2-2024/Architecture/GeneralIcons/AwsMarketplaceDark')

' renders the element
AwsMarketplaceDark('AwsMarketplaceDark', 'Aws Marketplace Dark', 'an optional tech label', 'an optional description')
@enduml
```

## AwsMarketplaceDarkCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsMarketplaceDarkCard
include('aws-q2-2024/Architecture/GeneralIcons/AwsMarketplaceDark')

' renders the element
AwsMarketplaceDarkCard('AwsMarketplaceDarkCard', 'Aws Marketplace Dark Card', 'an optional description')
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

' loads the Item which embeds the element AwsMarketplaceDarkCard
include('aws-q2-2024/Architecture/GeneralIcons/AwsMarketplaceDark')

' renders the element
AwsMarketplaceDarkCard('AwsMarketplaceDarkCard', 'Aws Marketplace Dark Card', 'an optional description')
@enduml
```

## AwsMarketplaceDarkGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsMarketplaceDarkGroup
include('aws-q2-2024/Architecture/GeneralIcons/AwsMarketplaceDark')

' renders the element
AwsMarketplaceDarkGroup('AwsMarketplaceDarkGroup', 'Aws Marketplace Dark Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsMarketplaceDarkGroup
include('aws-q2-2024/Architecture/GeneralIcons/AwsMarketplaceDark')

' renders the element
AwsMarketplaceDarkGroup('AwsMarketplaceDarkGroup', 'Aws Marketplace Dark Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

