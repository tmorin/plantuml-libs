# Monster


```text
simpleicons/M/Monster
```

```text
include('simpleicons/M/Monster')
```



| Illustration | Monster |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Monster.png) | ![illustration for Monster](../../simpleicons/M/Monster.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MonsterXs>`
- `<$MonsterSm>`
- `<$MonsterMd>`
- `<$MonsterLg>`





## Monster

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Monster
include('simpleicons/M/Monster')

' renders the element
Monster('Monster', 'Monster', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Monster
include('simpleicons/M/Monster')

' renders the element
Monster('Monster', 'Monster', 'an optional tech label', 'an optional description')
@enduml
```

