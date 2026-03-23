# DraftingCompass


```text
fontawesome/Solid/DraftingCompass
```

```text
include('fontawesome/Solid/DraftingCompass')
```



| Illustration | DraftingCompass |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/DraftingCompass.png) | ![illustration for DraftingCompass](../../fontawesome/Solid/DraftingCompass.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DraftingCompassXs>`
- `<$DraftingCompassSm>`
- `<$DraftingCompassMd>`
- `<$DraftingCompassLg>`





## DraftingCompass

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element DraftingCompass
include('fontawesome/Solid/DraftingCompass')

' renders the element
DraftingCompass('DraftingCompass', 'Drafting Compass', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DraftingCompass
include('fontawesome/Solid/DraftingCompass')

' renders the element
DraftingCompass('DraftingCompass', 'Drafting Compass', 'an optional tech label', 'an optional description')
@enduml
```

