# H2Database


```text
simpleicons-14/H/H2Database
```

```text
include('simpleicons-14/H/H2Database')
```



| Illustration | H2Database |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/H2Database.png) | ![illustration for H2Database](../../simpleicons-14/H/H2Database.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$H2DatabaseXs>`
- `<$H2DatabaseSm>`
- `<$H2DatabaseMd>`
- `<$H2DatabaseLg>`





## H2Database

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element H2Database
include('simpleicons-14/H/H2Database')

' renders the element
H2Database('H2Database', 'H2 Database', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element H2Database
include('simpleicons-14/H/H2Database')

' renders the element
H2Database('H2Database', 'H2 Database', 'an optional tech label', 'an optional description')
@enduml
```

