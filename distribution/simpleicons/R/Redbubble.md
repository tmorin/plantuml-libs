# Redbubble


```text
simpleicons/R/Redbubble
```

```text
include('simpleicons/R/Redbubble')
```



| Illustration | Redbubble |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Redbubble.png) | ![illustration for Redbubble](../../simpleicons/R/Redbubble.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RedbubbleXs>`
- `<$RedbubbleSm>`
- `<$RedbubbleMd>`
- `<$RedbubbleLg>`





## Redbubble

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Redbubble
include('simpleicons/R/Redbubble')

' renders the element
Redbubble('Redbubble', 'Redbubble', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Redbubble
include('simpleicons/R/Redbubble')

' renders the element
Redbubble('Redbubble', 'Redbubble', 'an optional tech label', 'an optional description')
@enduml
```

