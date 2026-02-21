# Swatchbook


```text
fontawesome/Solid/Swatchbook
```

```text
include('fontawesome/Solid/Swatchbook')
```



| Illustration | Swatchbook |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Swatchbook.png) | ![illustration for Swatchbook](../../fontawesome/Solid/Swatchbook.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SwatchbookXs>`
- `<$SwatchbookSm>`
- `<$SwatchbookMd>`
- `<$SwatchbookLg>`





## Swatchbook

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Swatchbook
include('fontawesome/Solid/Swatchbook')

' renders the element
Swatchbook('Swatchbook', 'Swatchbook', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Swatchbook
include('fontawesome/Solid/Swatchbook')

' renders the element
Swatchbook('Swatchbook', 'Swatchbook', 'an optional tech label', 'an optional description')
@enduml
```

