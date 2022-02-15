# HandsBubbles


```text
fontawesome-6/Solid/HandsBubbles
```

```text
include('fontawesome-6/Solid/HandsBubbles')
```



| Illustration | HandsBubbles |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HandsBubbles.png) | ![illustration for HandsBubbles](../../fontawesome-6/Solid/HandsBubbles.Local.png) |




## HandsBubbles

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HandsBubbles
include('fontawesome-6/Solid/HandsBubbles')

' renders the element
HandsBubbles('HandsBubbles', 'Hands Bubbles', 'an optional tech label')
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

' loads the Item which embeds the element HandsBubbles
include('fontawesome-6/Solid/HandsBubbles')

' renders the element
HandsBubbles('HandsBubbles', 'Hands Bubbles', 'an optional tech label')
@enduml
```

