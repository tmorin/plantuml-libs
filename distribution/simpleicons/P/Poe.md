# Poe


```text
simpleicons/P/Poe
```

```text
include('simpleicons/P/Poe')
```



| Illustration | Poe |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Poe.png) | ![illustration for Poe](../../simpleicons/P/Poe.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PoeXs>`
- `<$PoeSm>`
- `<$PoeMd>`
- `<$PoeLg>`





## Poe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Poe
include('simpleicons/P/Poe')

' renders the element
Poe('Poe', 'Poe', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Poe
include('simpleicons/P/Poe')

' renders the element
Poe('Poe', 'Poe', 'an optional tech label', 'an optional description')
@enduml
```

