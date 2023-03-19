# CompassDrafting


```text
fontawesome-6/Solid/CompassDrafting
```

```text
include('fontawesome-6/Solid/CompassDrafting')
```



| Illustration | CompassDrafting |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CompassDrafting.png) | ![illustration for CompassDrafting](../../fontawesome-6/Solid/CompassDrafting.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CompassDraftingXs>`
- `<$CompassDraftingSm>`
- `<$CompassDraftingMd>`
- `<$CompassDraftingLg>`





## CompassDrafting

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CompassDrafting
include('fontawesome-6/Solid/CompassDrafting')

' renders the element
CompassDrafting('CompassDrafting', 'Compass Drafting', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CompassDrafting
include('fontawesome-6/Solid/CompassDrafting')

' renders the element
CompassDrafting('CompassDrafting', 'Compass Drafting', 'an optional tech label', 'an optional description')
@enduml
```

