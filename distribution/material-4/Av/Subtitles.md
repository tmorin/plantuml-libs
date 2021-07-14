# Subtitles


```text
material-4/Av/Subtitles
```

```text
include('material-4/Av/Subtitles')
```



| Illustration | Subtitles |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/Subtitles.png) | ![illustration for Subtitles](../../material-4/Av/Subtitles.Local.png) |




## Subtitles

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Subtitles
include('material-4/Av/Subtitles')

' renders the element
Subtitles('Subtitles', 'Subtitles', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Subtitles
include('material-4/Av/Subtitles')

' renders the element
Subtitles('Subtitles', 'Subtitles', 'an optional tech label')
@enduml
```

