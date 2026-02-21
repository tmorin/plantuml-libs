# Abusedotch


```text
simpleicons-14/A/Abusedotch
```

```text
include('simpleicons-14/A/Abusedotch')
```



| Illustration | Abusedotch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Abusedotch.png) | ![illustration for Abusedotch](../../simpleicons-14/A/Abusedotch.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AbusedotchXs>`
- `<$AbusedotchSm>`
- `<$AbusedotchMd>`
- `<$AbusedotchLg>`





## Abusedotch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Abusedotch
include('simpleicons-14/A/Abusedotch')

' renders the element
Abusedotch('Abusedotch', 'Abusedotch', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Abusedotch
include('simpleicons-14/A/Abusedotch')

' renders the element
Abusedotch('Abusedotch', 'Abusedotch', 'an optional tech label', 'an optional description')
@enduml
```

