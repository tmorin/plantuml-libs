# Freedesktopdotorg


```text
simpleicons/F/Freedesktopdotorg
```

```text
include('simpleicons/F/Freedesktopdotorg')
```



| Illustration | Freedesktopdotorg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Freedesktopdotorg.png) | ![illustration for Freedesktopdotorg](../../simpleicons/F/Freedesktopdotorg.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FreedesktopdotorgXs>`
- `<$FreedesktopdotorgSm>`
- `<$FreedesktopdotorgMd>`
- `<$FreedesktopdotorgLg>`





## Freedesktopdotorg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Freedesktopdotorg
include('simpleicons/F/Freedesktopdotorg')

' renders the element
Freedesktopdotorg('Freedesktopdotorg', 'Freedesktopdotorg', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Freedesktopdotorg
include('simpleicons/F/Freedesktopdotorg')

' renders the element
Freedesktopdotorg('Freedesktopdotorg', 'Freedesktopdotorg', 'an optional tech label', 'an optional description')
@enduml
```

