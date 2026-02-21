# Fonticons


```text
fontawesome/Brands/Fonticons
```

```text
include('fontawesome/Brands/Fonticons')
```



| Illustration | Fonticons |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Fonticons.png) | ![illustration for Fonticons](../../fontawesome/Brands/Fonticons.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FonticonsXs>`
- `<$FonticonsSm>`
- `<$FonticonsMd>`
- `<$FonticonsLg>`





## Fonticons

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Fonticons
include('fontawesome/Brands/Fonticons')

' renders the element
Fonticons('Fonticons', 'Fonticons', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fonticons
include('fontawesome/Brands/Fonticons')

' renders the element
Fonticons('Fonticons', 'Fonticons', 'an optional tech label', 'an optional description')
@enduml
```

