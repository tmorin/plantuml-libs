# Chess


```text
fontawesome-5/Solid/Chess
```

```text
include('fontawesome-5/Solid/Chess')
```



| Illustration | Chess |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Chess.png) | ![illustration for Chess](../../fontawesome-5/Solid/Chess.Local.png) |




## Chess

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Chess
include('fontawesome-5/Solid/Chess')

' renders the element
Chess('Chess', 'Chess', 'an optional tech label')
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

' loads the Item which embeds the element Chess
include('fontawesome-5/Solid/Chess')

' renders the element
Chess('Chess', 'Chess', 'an optional tech label')
@enduml
```

