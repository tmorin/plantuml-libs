# Score


```text
material-4/Editor/Score
```

```text
include('material-4/Editor/Score')
```



| Illustration | Score |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/Score.png) | ![illustration for Score](../../material-4/Editor/Score.Local.png) |




## Score

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Score
include('material-4/Editor/Score')

' renders the element
Score('Score', 'Score', 'an optional tech label')
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

' loads the Item which embeds the element Score
include('material-4/Editor/Score')

' renders the element
Score('Score', 'Score', 'an optional tech label')
@enduml
```

