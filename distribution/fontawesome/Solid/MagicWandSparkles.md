# MagicWandSparkles


```text
fontawesome/Solid/MagicWandSparkles
```

```text
include('fontawesome/Solid/MagicWandSparkles')
```



| Illustration | MagicWandSparkles |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MagicWandSparkles.png) | ![illustration for MagicWandSparkles](../../fontawesome/Solid/MagicWandSparkles.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MagicWandSparklesXs>`
- `<$MagicWandSparklesSm>`
- `<$MagicWandSparklesMd>`
- `<$MagicWandSparklesLg>`





## MagicWandSparkles

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MagicWandSparkles
include('fontawesome/Solid/MagicWandSparkles')

' renders the element
MagicWandSparkles('MagicWandSparkles', 'Magic Wand Sparkles', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MagicWandSparkles
include('fontawesome/Solid/MagicWandSparkles')

' renders the element
MagicWandSparkles('MagicWandSparkles', 'Magic Wand Sparkles', 'an optional tech label', 'an optional description')
@enduml
```

