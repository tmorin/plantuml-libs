# Icicles


```text
fontawesome-6/Solid/Icicles
```

```text
include('fontawesome-6/Solid/Icicles')
```



| Illustration | Icicles |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Icicles.png) | ![illustration for Icicles](../../fontawesome-6/Solid/Icicles.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IciclesXs>`
- `<$IciclesSm>`
- `<$IciclesMd>`
- `<$IciclesLg>`





## Icicles

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Icicles
include('fontawesome-6/Solid/Icicles')

' renders the element
Icicles('Icicles', 'Icicles', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Icicles
include('fontawesome-6/Solid/Icicles')

' renders the element
Icicles('Icicles', 'Icicles', 'an optional tech label', 'an optional description')
@enduml
```

