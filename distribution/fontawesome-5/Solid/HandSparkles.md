# HandSparkles


```text
fontawesome-5/Solid/HandSparkles
```

```text
include('fontawesome-5/Solid/HandSparkles')
```



| Illustration | HandSparkles |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/HandSparkles.png) | ![illustration for HandSparkles](../../fontawesome-5/Solid/HandSparkles.Local.png) |




## HandSparkles

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HandSparkles
include('fontawesome-5/Solid/HandSparkles')

' renders the element
HandSparkles('HandSparkles', 'Hand Sparkles', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HandSparkles
include('fontawesome-5/Solid/HandSparkles')

' renders the element
HandSparkles('HandSparkles', 'Hand Sparkles', 'an optional tech label')
@enduml
```

