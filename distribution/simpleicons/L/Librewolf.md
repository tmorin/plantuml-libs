# Librewolf


```text
simpleicons/L/Librewolf
```

```text
include('simpleicons/L/Librewolf')
```



| Illustration | Librewolf |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Librewolf.png) | ![illustration for Librewolf](../../simpleicons/L/Librewolf.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LibrewolfXs>`
- `<$LibrewolfSm>`
- `<$LibrewolfMd>`
- `<$LibrewolfLg>`





## Librewolf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Librewolf
include('simpleicons/L/Librewolf')

' renders the element
Librewolf('Librewolf', 'Librewolf', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Librewolf
include('simpleicons/L/Librewolf')

' renders the element
Librewolf('Librewolf', 'Librewolf', 'an optional tech label', 'an optional description')
@enduml
```

