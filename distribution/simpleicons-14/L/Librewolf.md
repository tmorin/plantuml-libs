# Librewolf


```text
simpleicons-14/L/Librewolf
```

```text
include('simpleicons-14/L/Librewolf')
```



| Illustration | Librewolf |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Librewolf.png) | ![illustration for Librewolf](../../simpleicons-14/L/Librewolf.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Librewolf
include('simpleicons-14/L/Librewolf')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Librewolf
include('simpleicons-14/L/Librewolf')

' renders the element
Librewolf('Librewolf', 'Librewolf', 'an optional tech label', 'an optional description')
@enduml
```

