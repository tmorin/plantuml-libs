# Librarything


```text
simpleicons/L/Librarything
```

```text
include('simpleicons/L/Librarything')
```



| Illustration | Librarything |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Librarything.png) | ![illustration for Librarything](../../simpleicons/L/Librarything.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LibrarythingXs>`
- `<$LibrarythingSm>`
- `<$LibrarythingMd>`
- `<$LibrarythingLg>`





## Librarything

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Librarything
include('simpleicons/L/Librarything')

' renders the element
Librarything('Librarything', 'Librarything', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Librarything
include('simpleicons/L/Librarything')

' renders the element
Librarything('Librarything', 'Librarything', 'an optional tech label', 'an optional description')
@enduml
```

