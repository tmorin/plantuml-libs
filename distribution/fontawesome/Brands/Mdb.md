# Mdb


```text
fontawesome/Brands/Mdb
```

```text
include('fontawesome/Brands/Mdb')
```



| Illustration | Mdb |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Mdb.png) | ![illustration for Mdb](../../fontawesome/Brands/Mdb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MdbXs>`
- `<$MdbSm>`
- `<$MdbMd>`
- `<$MdbLg>`





## Mdb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Mdb
include('fontawesome/Brands/Mdb')

' renders the element
Mdb('Mdb', 'Mdb', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Mdb
include('fontawesome/Brands/Mdb')

' renders the element
Mdb('Mdb', 'Mdb', 'an optional tech label', 'an optional description')
@enduml
```

