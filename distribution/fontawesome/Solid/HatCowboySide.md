# HatCowboySide


```text
fontawesome/Solid/HatCowboySide
```

```text
include('fontawesome/Solid/HatCowboySide')
```



| Illustration | HatCowboySide |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HatCowboySide.png) | ![illustration for HatCowboySide](../../fontawesome/Solid/HatCowboySide.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HatCowboySideXs>`
- `<$HatCowboySideSm>`
- `<$HatCowboySideMd>`
- `<$HatCowboySideLg>`





## HatCowboySide

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HatCowboySide
include('fontawesome/Solid/HatCowboySide')

' renders the element
HatCowboySide('HatCowboySide', 'Hat Cowboy Side', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HatCowboySide
include('fontawesome/Solid/HatCowboySide')

' renders the element
HatCowboySide('HatCowboySide', 'Hat Cowboy Side', 'an optional tech label', 'an optional description')
@enduml
```

