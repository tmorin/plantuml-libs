# Hackernoon


```text
simpleicons-8/H/Hackernoon
```

```text
include('simpleicons-8/H/Hackernoon')
```



| Illustration | Hackernoon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/H/Hackernoon.png) | ![illustration for Hackernoon](../../simpleicons-8/H/Hackernoon.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Hackernoon
include('simpleicons-8/H/Hackernoon')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Hackernoon
include('simpleicons-8/H/Hackernoon')

' renders the element
Hackernoon('Hackernoon', 'Hackernoon', 'an optional tech label', 'an optional description')
@enduml
```

