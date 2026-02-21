# Renpy


```text
simpleicons/R/Renpy
```

```text
include('simpleicons/R/Renpy')
```



| Illustration | Renpy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Renpy.png) | ![illustration for Renpy](../../simpleicons/R/Renpy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RenpyXs>`
- `<$RenpySm>`
- `<$RenpyMd>`
- `<$RenpyLg>`





## Renpy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Renpy
include('simpleicons/R/Renpy')

' renders the element
Renpy('Renpy', 'Renpy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Renpy
include('simpleicons/R/Renpy')

' renders the element
Renpy('Renpy', 'Renpy', 'an optional tech label', 'an optional description')
@enduml
```

