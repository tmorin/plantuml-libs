# MagnifyingGlass


```text
aws-q1-2025/Resource/GeneralIcons/MagnifyingGlass
```

```text
include('aws-q1-2025/Resource/GeneralIcons/MagnifyingGlass')
```



| Illustration | MagnifyingGlass | MagnifyingGlassCard | MagnifyingGlassGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Resource/GeneralIcons/MagnifyingGlass.png) | ![illustration for MagnifyingGlass](../../../aws-q1-2025/Resource/GeneralIcons/MagnifyingGlass.Local.png) | ![illustration for MagnifyingGlassCard](../../../aws-q1-2025/Resource/GeneralIcons/MagnifyingGlassCard.Local.png) | ![illustration for MagnifyingGlassGroup](../../../aws-q1-2025/Resource/GeneralIcons/MagnifyingGlassGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MagnifyingGlassXs>`
- `<$MagnifyingGlassSm>`
- `<$MagnifyingGlassMd>`
- `<$MagnifyingGlassLg>`





## MagnifyingGlass

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element MagnifyingGlass
include('aws-q1-2025/Resource/GeneralIcons/MagnifyingGlass')

' renders the element
MagnifyingGlass('MagnifyingGlass', 'Magnifying Glass', 'an optional tech label', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element MagnifyingGlass
include('aws-q1-2025/Resource/GeneralIcons/MagnifyingGlass')

' renders the element
MagnifyingGlass('MagnifyingGlass', 'Magnifying Glass', 'an optional tech label', 'an optional description')
@enduml
```

## MagnifyingGlassCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element MagnifyingGlassCard
include('aws-q1-2025/Resource/GeneralIcons/MagnifyingGlass')

' renders the element
MagnifyingGlassCard('MagnifyingGlassCard', 'Magnifying Glass Card', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element MagnifyingGlassCard
include('aws-q1-2025/Resource/GeneralIcons/MagnifyingGlass')

' renders the element
MagnifyingGlassCard('MagnifyingGlassCard', 'Magnifying Glass Card', 'an optional description')
@enduml
```

## MagnifyingGlassGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element MagnifyingGlassGroup
include('aws-q1-2025/Resource/GeneralIcons/MagnifyingGlass')

' renders the element
MagnifyingGlassGroup('MagnifyingGlassGroup', 'Magnifying Glass Group', 'an optional tech label') {
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element MagnifyingGlassGroup
include('aws-q1-2025/Resource/GeneralIcons/MagnifyingGlass')

' renders the element
MagnifyingGlassGroup('MagnifyingGlassGroup', 'Magnifying Glass Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

