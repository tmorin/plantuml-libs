# WandSparkles


```text
fontawesome-6/Solid/WandSparkles
```

```text
include('fontawesome-6/Solid/WandSparkles')
```



| Illustration | WandSparkles |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/WandSparkles.png) | ![illustration for WandSparkles](../../fontawesome-6/Solid/WandSparkles.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WandSparklesXs>`
- `<$WandSparklesSm>`
- `<$WandSparklesMd>`
- `<$WandSparklesLg>`





## WandSparkles

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element WandSparkles
include('fontawesome-6/Solid/WandSparkles')

' renders the element
WandSparkles('WandSparkles', 'Wand Sparkles', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WandSparkles
include('fontawesome-6/Solid/WandSparkles')

' renders the element
WandSparkles('WandSparkles', 'Wand Sparkles', 'an optional tech label', 'an optional description')
@enduml
```

