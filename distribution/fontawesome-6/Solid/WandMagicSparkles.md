# WandMagicSparkles


```text
fontawesome-6/Solid/WandMagicSparkles
```

```text
include('fontawesome-6/Solid/WandMagicSparkles')
```



| Illustration | WandMagicSparkles |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/WandMagicSparkles.png) | ![illustration for WandMagicSparkles](../../fontawesome-6/Solid/WandMagicSparkles.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element WandMagicSparkles
include('fontawesome-6/Solid/WandMagicSparkles')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element WandMagicSparkles
include('fontawesome-6/Solid/WandMagicSparkles')

' renders the element
WandMagicSparkles('WandMagicSparkles', 'Wand Magic Sparkles', 'an optional tech label', 'an optional description')
@enduml
```

