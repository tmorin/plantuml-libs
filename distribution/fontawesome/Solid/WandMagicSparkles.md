# WandMagicSparkles


```text
fontawesome/Solid/WandMagicSparkles
```

```text
include('fontawesome/Solid/WandMagicSparkles')
```



| Illustration | WandMagicSparkles |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/WandMagicSparkles.png) | ![illustration for WandMagicSparkles](../../fontawesome/Solid/WandMagicSparkles.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WandMagicSparklesXs>`
- `<$WandMagicSparklesSm>`
- `<$WandMagicSparklesMd>`
- `<$WandMagicSparklesLg>`





## WandMagicSparkles

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element WandMagicSparkles
include('fontawesome/Solid/WandMagicSparkles')

' renders the element
WandMagicSparkles('WandMagicSparkles', 'Wand Magic Sparkles', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WandMagicSparkles
include('fontawesome/Solid/WandMagicSparkles')

' renders the element
WandMagicSparkles('WandMagicSparkles', 'Wand Magic Sparkles', 'an optional tech label', 'an optional description')
@enduml
```

