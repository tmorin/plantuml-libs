# Enterprisedb


```text
simpleicons/E/Enterprisedb
```

```text
include('simpleicons/E/Enterprisedb')
```



| Illustration | Enterprisedb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/E/Enterprisedb.png) | ![illustration for Enterprisedb](../../simpleicons/E/Enterprisedb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EnterprisedbXs>`
- `<$EnterprisedbSm>`
- `<$EnterprisedbMd>`
- `<$EnterprisedbLg>`





## Enterprisedb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Enterprisedb
include('simpleicons/E/Enterprisedb')

' renders the element
Enterprisedb('Enterprisedb', 'Enterprisedb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Enterprisedb
include('simpleicons/E/Enterprisedb')

' renders the element
Enterprisedb('Enterprisedb', 'Enterprisedb', 'an optional tech label', 'an optional description')
@enduml
```

