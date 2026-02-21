# Mariadb


```text
simpleicons/M/Mariadb
```

```text
include('simpleicons/M/Mariadb')
```



| Illustration | Mariadb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Mariadb.png) | ![illustration for Mariadb](../../simpleicons/M/Mariadb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MariadbXs>`
- `<$MariadbSm>`
- `<$MariadbMd>`
- `<$MariadbLg>`





## Mariadb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Mariadb
include('simpleicons/M/Mariadb')

' renders the element
Mariadb('Mariadb', 'Mariadb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mariadb
include('simpleicons/M/Mariadb')

' renders the element
Mariadb('Mariadb', 'Mariadb', 'an optional tech label', 'an optional description')
@enduml
```

