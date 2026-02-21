# PlayForWork


```text
material/Action/PlayForWork
```

```text
include('material/Action/PlayForWork')
```



| Illustration | PlayForWork |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/PlayForWork.png) | ![illustration for PlayForWork](../../material/Action/PlayForWork.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlayForWorkXs>`
- `<$PlayForWorkSm>`
- `<$PlayForWorkMd>`
- `<$PlayForWorkLg>`





## PlayForWork

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PlayForWork
include('material/Action/PlayForWork')

' renders the element
PlayForWork('PlayForWork', 'Play For Work', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element PlayForWork
include('material/Action/PlayForWork')

' renders the element
PlayForWork('PlayForWork', 'Play For Work', 'an optional tech label', 'an optional description')
@enduml
```

