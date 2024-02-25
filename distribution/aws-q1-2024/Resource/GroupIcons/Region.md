# Region


```text
aws-q1-2024/Resource/GroupIcons/Region
```

```text
include('aws-q1-2024/Resource/GroupIcons/Region')
```



| Illustration | Region | RegionCard | RegionGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2024/Resource/GroupIcons/Region.png) | ![illustration for Region](../../../aws-q1-2024/Resource/GroupIcons/Region.Local.png) | ![illustration for RegionCard](../../../aws-q1-2024/Resource/GroupIcons/RegionCard.Local.png) | ![illustration for RegionGroup](../../../aws-q1-2024/Resource/GroupIcons/RegionGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RegionXs>`
- `<$RegionSm>`
- `<$RegionMd>`
- `<$RegionLg>`





## Region

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element Region
include('aws-q1-2024/Resource/GroupIcons/Region')

' renders the element
Region('Region', 'Region', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Region
include('aws-q1-2024/Resource/GroupIcons/Region')

' renders the element
Region('Region', 'Region', 'an optional tech label', 'an optional description')
@enduml
```

## RegionCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element RegionCard
include('aws-q1-2024/Resource/GroupIcons/Region')

' renders the element
RegionCard('RegionCard', 'Region Card', 'an optional description')
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

' loads the Item which embeds the element RegionCard
include('aws-q1-2024/Resource/GroupIcons/Region')

' renders the element
RegionCard('RegionCard', 'Region Card', 'an optional description')
@enduml
```

## RegionGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element RegionGroup
include('aws-q1-2024/Resource/GroupIcons/Region')

' renders the element
RegionGroup('RegionGroup', 'Region Group', 'an optional tech label') {
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

' loads the Item which embeds the element RegionGroup
include('aws-q1-2024/Resource/GroupIcons/Region')

' renders the element
RegionGroup('RegionGroup', 'Region Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

