# Prosieben


```text
simpleicons-14/P/Prosieben
```

```text
include('simpleicons-14/P/Prosieben')
```



| Illustration | Prosieben |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Prosieben.png) | ![illustration for Prosieben](../../simpleicons-14/P/Prosieben.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Prosieben
include('simpleicons-14/P/Prosieben')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Prosieben
include('simpleicons-14/P/Prosieben')

' renders the element
Prosieben('Prosieben', 'Prosieben', 'an optional tech label', 'an optional description')
@enduml
```

