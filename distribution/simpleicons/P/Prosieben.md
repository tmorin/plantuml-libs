# Prosieben


```text
simpleicons/P/Prosieben
```

```text
include('simpleicons/P/Prosieben')
```



| Illustration | Prosieben |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Prosieben.png) | ![illustration for Prosieben](../../simpleicons/P/Prosieben.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ProsiebenXs>`
- `<$ProsiebenSm>`
- `<$ProsiebenMd>`
- `<$ProsiebenLg>`





## Prosieben

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Prosieben
include('simpleicons/P/Prosieben')

' renders the element
Prosieben('Prosieben', 'Prosieben', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Prosieben
include('simpleicons/P/Prosieben')

' renders the element
Prosieben('Prosieben', 'Prosieben', 'an optional tech label', 'an optional description')
@enduml
```

