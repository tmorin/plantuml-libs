# Freedesktopdotorg


```text
simpleicons-14/F/Freedesktopdotorg
```

```text
include('simpleicons-14/F/Freedesktopdotorg')
```



| Illustration | Freedesktopdotorg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Freedesktopdotorg.png) | ![illustration for Freedesktopdotorg](../../simpleicons-14/F/Freedesktopdotorg.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Freedesktopdotorg
include('simpleicons-14/F/Freedesktopdotorg')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Freedesktopdotorg
include('simpleicons-14/F/Freedesktopdotorg')

' renders the element
Freedesktopdotorg('Freedesktopdotorg', 'Freedesktopdotorg', 'an optional tech label', 'an optional description')
@enduml
```

