# Paradoxinteractive


```text
simpleicons/P/Paradoxinteractive
```

```text
include('simpleicons/P/Paradoxinteractive')
```



| Illustration | Paradoxinteractive |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Paradoxinteractive.png) | ![illustration for Paradoxinteractive](../../simpleicons/P/Paradoxinteractive.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ParadoxinteractiveXs>`
- `<$ParadoxinteractiveSm>`
- `<$ParadoxinteractiveMd>`
- `<$ParadoxinteractiveLg>`





## Paradoxinteractive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Paradoxinteractive
include('simpleicons/P/Paradoxinteractive')

' renders the element
Paradoxinteractive('Paradoxinteractive', 'Paradoxinteractive', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Paradoxinteractive
include('simpleicons/P/Paradoxinteractive')

' renders the element
Paradoxinteractive('Paradoxinteractive', 'Paradoxinteractive', 'an optional tech label', 'an optional description')
@enduml
```

