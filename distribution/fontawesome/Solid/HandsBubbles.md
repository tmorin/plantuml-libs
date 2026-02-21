# HandsBubbles


```text
fontawesome/Solid/HandsBubbles
```

```text
include('fontawesome/Solid/HandsBubbles')
```



| Illustration | HandsBubbles |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HandsBubbles.png) | ![illustration for HandsBubbles](../../fontawesome/Solid/HandsBubbles.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandsBubblesXs>`
- `<$HandsBubblesSm>`
- `<$HandsBubblesMd>`
- `<$HandsBubblesLg>`





## HandsBubbles

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandsBubbles
include('fontawesome/Solid/HandsBubbles')

' renders the element
HandsBubbles('HandsBubbles', 'Hands Bubbles', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandsBubbles
include('fontawesome/Solid/HandsBubbles')

' renders the element
HandsBubbles('HandsBubbles', 'Hands Bubbles', 'an optional tech label', 'an optional description')
@enduml
```

