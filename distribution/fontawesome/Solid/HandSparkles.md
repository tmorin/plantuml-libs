# HandSparkles


```text
fontawesome/Solid/HandSparkles
```

```text
include('fontawesome/Solid/HandSparkles')
```



| Illustration | HandSparkles |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HandSparkles.png) | ![illustration for HandSparkles](../../fontawesome/Solid/HandSparkles.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandSparklesXs>`
- `<$HandSparklesSm>`
- `<$HandSparklesMd>`
- `<$HandSparklesLg>`





## HandSparkles

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandSparkles
include('fontawesome/Solid/HandSparkles')

' renders the element
HandSparkles('HandSparkles', 'Hand Sparkles', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandSparkles
include('fontawesome/Solid/HandSparkles')

' renders the element
HandSparkles('HandSparkles', 'Hand Sparkles', 'an optional tech label', 'an optional description')
@enduml
```

