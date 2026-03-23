# SlidersH


```text
fontawesome/Solid/SlidersH
```

```text
include('fontawesome/Solid/SlidersH')
```



| Illustration | SlidersH |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SlidersH.png) | ![illustration for SlidersH](../../fontawesome/Solid/SlidersH.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SlidersHXs>`
- `<$SlidersHSm>`
- `<$SlidersHMd>`
- `<$SlidersHLg>`





## SlidersH

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SlidersH
include('fontawesome/Solid/SlidersH')

' renders the element
SlidersH('SlidersH', 'Sliders H', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SlidersH
include('fontawesome/Solid/SlidersH')

' renders the element
SlidersH('SlidersH', 'Sliders H', 'an optional tech label', 'an optional description')
@enduml
```

