# Wegame


```text
simpleicons/W/Wegame
```

```text
include('simpleicons/W/Wegame')
```



| Illustration | Wegame |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Wegame.png) | ![illustration for Wegame](../../simpleicons/W/Wegame.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WegameXs>`
- `<$WegameSm>`
- `<$WegameMd>`
- `<$WegameLg>`





## Wegame

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Wegame
include('simpleicons/W/Wegame')

' renders the element
Wegame('Wegame', 'Wegame', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wegame
include('simpleicons/W/Wegame')

' renders the element
Wegame('Wegame', 'Wegame', 'an optional tech label', 'an optional description')
@enduml
```

