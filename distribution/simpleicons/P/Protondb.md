# Protondb


```text
simpleicons/P/Protondb
```

```text
include('simpleicons/P/Protondb')
```



| Illustration | Protondb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Protondb.png) | ![illustration for Protondb](../../simpleicons/P/Protondb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ProtondbXs>`
- `<$ProtondbSm>`
- `<$ProtondbMd>`
- `<$ProtondbLg>`





## Protondb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Protondb
include('simpleicons/P/Protondb')

' renders the element
Protondb('Protondb', 'Protondb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Protondb
include('simpleicons/P/Protondb')

' renders the element
Protondb('Protondb', 'Protondb', 'an optional tech label', 'an optional description')
@enduml
```

