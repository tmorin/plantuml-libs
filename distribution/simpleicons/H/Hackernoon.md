# Hackernoon


```text
simpleicons/H/Hackernoon
```

```text
include('simpleicons/H/Hackernoon')
```



| Illustration | Hackernoon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Hackernoon.png) | ![illustration for Hackernoon](../../simpleicons/H/Hackernoon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HackernoonXs>`
- `<$HackernoonSm>`
- `<$HackernoonMd>`
- `<$HackernoonLg>`





## Hackernoon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Hackernoon
include('simpleicons/H/Hackernoon')

' renders the element
Hackernoon('Hackernoon', 'Hackernoon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hackernoon
include('simpleicons/H/Hackernoon')

' renders the element
Hackernoon('Hackernoon', 'Hackernoon', 'an optional tech label', 'an optional description')
@enduml
```

