# Notesnook


```text
simpleicons/N/Notesnook
```

```text
include('simpleicons/N/Notesnook')
```



| Illustration | Notesnook |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Notesnook.png) | ![illustration for Notesnook](../../simpleicons/N/Notesnook.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NotesnookXs>`
- `<$NotesnookSm>`
- `<$NotesnookMd>`
- `<$NotesnookLg>`





## Notesnook

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Notesnook
include('simpleicons/N/Notesnook')

' renders the element
Notesnook('Notesnook', 'Notesnook', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Notesnook
include('simpleicons/N/Notesnook')

' renders the element
Notesnook('Notesnook', 'Notesnook', 'an optional tech label', 'an optional description')
@enduml
```

