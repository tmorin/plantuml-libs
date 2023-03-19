# TrowelBricks


```text
fontawesome-6/Solid/TrowelBricks
```

```text
include('fontawesome-6/Solid/TrowelBricks')
```



| Illustration | TrowelBricks |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/TrowelBricks.png) | ![illustration for TrowelBricks](../../fontawesome-6/Solid/TrowelBricks.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TrowelBricksXs>`
- `<$TrowelBricksSm>`
- `<$TrowelBricksMd>`
- `<$TrowelBricksLg>`





## TrowelBricks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TrowelBricks
include('fontawesome-6/Solid/TrowelBricks')

' renders the element
TrowelBricks('TrowelBricks', 'Trowel Bricks', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TrowelBricks
include('fontawesome-6/Solid/TrowelBricks')

' renders the element
TrowelBricks('TrowelBricks', 'Trowel Bricks', 'an optional tech label', 'an optional description')
@enduml
```

