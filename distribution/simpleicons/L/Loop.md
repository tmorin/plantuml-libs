# Loop


```text
simpleicons/L/Loop
```

```text
include('simpleicons/L/Loop')
```



| Illustration | Loop |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Loop.png) | ![illustration for Loop](../../simpleicons/L/Loop.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LoopXs>`
- `<$LoopSm>`
- `<$LoopMd>`
- `<$LoopLg>`





## Loop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Loop
include('simpleicons/L/Loop')

' renders the element
Loop('Loop', 'Loop', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Loop
include('simpleicons/L/Loop')

' renders the element
Loop('Loop', 'Loop', 'an optional tech label', 'an optional description')
@enduml
```

