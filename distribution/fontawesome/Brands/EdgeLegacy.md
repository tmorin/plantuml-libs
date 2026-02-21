# EdgeLegacy


```text
fontawesome/Brands/EdgeLegacy
```

```text
include('fontawesome/Brands/EdgeLegacy')
```



| Illustration | EdgeLegacy |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/EdgeLegacy.png) | ![illustration for EdgeLegacy](../../fontawesome/Brands/EdgeLegacy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EdgeLegacyXs>`
- `<$EdgeLegacySm>`
- `<$EdgeLegacyMd>`
- `<$EdgeLegacyLg>`





## EdgeLegacy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element EdgeLegacy
include('fontawesome/Brands/EdgeLegacy')

' renders the element
EdgeLegacy('EdgeLegacy', 'Edge Legacy', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element EdgeLegacy
include('fontawesome/Brands/EdgeLegacy')

' renders the element
EdgeLegacy('EdgeLegacy', 'Edge Legacy', 'an optional tech label', 'an optional description')
@enduml
```

