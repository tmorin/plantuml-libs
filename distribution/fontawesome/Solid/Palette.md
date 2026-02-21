# Palette


```text
fontawesome/Solid/Palette
```

```text
include('fontawesome/Solid/Palette')
```



| Illustration | Palette |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Palette.png) | ![illustration for Palette](../../fontawesome/Solid/Palette.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PaletteXs>`
- `<$PaletteSm>`
- `<$PaletteMd>`
- `<$PaletteLg>`





## Palette

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Palette
include('fontawesome/Solid/Palette')

' renders the element
Palette('Palette', 'Palette', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Palette
include('fontawesome/Solid/Palette')

' renders the element
Palette('Palette', 'Palette', 'an optional tech label', 'an optional description')
@enduml
```

