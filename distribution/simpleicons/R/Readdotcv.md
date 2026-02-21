# Readdotcv


```text
simpleicons/R/Readdotcv
```

```text
include('simpleicons/R/Readdotcv')
```



| Illustration | Readdotcv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Readdotcv.png) | ![illustration for Readdotcv](../../simpleicons/R/Readdotcv.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ReaddotcvXs>`
- `<$ReaddotcvSm>`
- `<$ReaddotcvMd>`
- `<$ReaddotcvLg>`





## Readdotcv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Readdotcv
include('simpleicons/R/Readdotcv')

' renders the element
Readdotcv('Readdotcv', 'Readdotcv', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Readdotcv
include('simpleicons/R/Readdotcv')

' renders the element
Readdotcv('Readdotcv', 'Readdotcv', 'an optional tech label', 'an optional description')
@enduml
```

