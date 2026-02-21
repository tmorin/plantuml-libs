# Gamebanana


```text
simpleicons/G/Gamebanana
```

```text
include('simpleicons/G/Gamebanana')
```



| Illustration | Gamebanana |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Gamebanana.png) | ![illustration for Gamebanana](../../simpleicons/G/Gamebanana.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GamebananaXs>`
- `<$GamebananaSm>`
- `<$GamebananaMd>`
- `<$GamebananaLg>`





## Gamebanana

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gamebanana
include('simpleicons/G/Gamebanana')

' renders the element
Gamebanana('Gamebanana', 'Gamebanana', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gamebanana
include('simpleicons/G/Gamebanana')

' renders the element
Gamebanana('Gamebanana', 'Gamebanana', 'an optional tech label', 'an optional description')
@enduml
```

