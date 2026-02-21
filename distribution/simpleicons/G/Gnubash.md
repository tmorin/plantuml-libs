# Gnubash


```text
simpleicons/G/Gnubash
```

```text
include('simpleicons/G/Gnubash')
```



| Illustration | Gnubash |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Gnubash.png) | ![illustration for Gnubash](../../simpleicons/G/Gnubash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GnubashXs>`
- `<$GnubashSm>`
- `<$GnubashMd>`
- `<$GnubashLg>`





## Gnubash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gnubash
include('simpleicons/G/Gnubash')

' renders the element
Gnubash('Gnubash', 'Gnubash', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gnubash
include('simpleicons/G/Gnubash')

' renders the element
Gnubash('Gnubash', 'Gnubash', 'an optional tech label', 'an optional description')
@enduml
```

