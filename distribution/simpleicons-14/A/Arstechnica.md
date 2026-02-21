# Arstechnica


```text
simpleicons-14/A/Arstechnica
```

```text
include('simpleicons-14/A/Arstechnica')
```



| Illustration | Arstechnica |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Arstechnica.png) | ![illustration for Arstechnica](../../simpleicons-14/A/Arstechnica.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArstechnicaXs>`
- `<$ArstechnicaSm>`
- `<$ArstechnicaMd>`
- `<$ArstechnicaLg>`





## Arstechnica

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Arstechnica
include('simpleicons-14/A/Arstechnica')

' renders the element
Arstechnica('Arstechnica', 'Arstechnica', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Arstechnica
include('simpleicons-14/A/Arstechnica')

' renders the element
Arstechnica('Arstechnica', 'Arstechnica', 'an optional tech label', 'an optional description')
@enduml
```

