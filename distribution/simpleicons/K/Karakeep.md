# Karakeep


```text
simpleicons/K/Karakeep
```

```text
include('simpleicons/K/Karakeep')
```



| Illustration | Karakeep |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Karakeep.png) | ![illustration for Karakeep](../../simpleicons/K/Karakeep.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KarakeepXs>`
- `<$KarakeepSm>`
- `<$KarakeepMd>`
- `<$KarakeepLg>`





## Karakeep

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Karakeep
include('simpleicons/K/Karakeep')

' renders the element
Karakeep('Karakeep', 'Karakeep', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Karakeep
include('simpleicons/K/Karakeep')

' renders the element
Karakeep('Karakeep', 'Karakeep', 'an optional tech label', 'an optional description')
@enduml
```

