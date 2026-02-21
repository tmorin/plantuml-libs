# Rollsroyce


```text
simpleicons/R/Rollsroyce
```

```text
include('simpleicons/R/Rollsroyce')
```



| Illustration | Rollsroyce |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Rollsroyce.png) | ![illustration for Rollsroyce](../../simpleicons/R/Rollsroyce.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RollsroyceXs>`
- `<$RollsroyceSm>`
- `<$RollsroyceMd>`
- `<$RollsroyceLg>`





## Rollsroyce

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Rollsroyce
include('simpleicons/R/Rollsroyce')

' renders the element
Rollsroyce('Rollsroyce', 'Rollsroyce', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rollsroyce
include('simpleicons/R/Rollsroyce')

' renders the element
Rollsroyce('Rollsroyce', 'Rollsroyce', 'an optional tech label', 'an optional description')
@enduml
```

