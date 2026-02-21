# Kinsta


```text
simpleicons/K/Kinsta
```

```text
include('simpleicons/K/Kinsta')
```



| Illustration | Kinsta |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/K/Kinsta.png) | ![illustration for Kinsta](../../simpleicons/K/Kinsta.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KinstaXs>`
- `<$KinstaSm>`
- `<$KinstaMd>`
- `<$KinstaLg>`





## Kinsta

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Kinsta
include('simpleicons/K/Kinsta')

' renders the element
Kinsta('Kinsta', 'Kinsta', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kinsta
include('simpleicons/K/Kinsta')

' renders the element
Kinsta('Kinsta', 'Kinsta', 'an optional tech label', 'an optional description')
@enduml
```

