# Enterprisedb


```text
simpleicons-14/E/Enterprisedb
```

```text
include('simpleicons-14/E/Enterprisedb')
```



| Illustration | Enterprisedb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Enterprisedb.png) | ![illustration for Enterprisedb](../../simpleicons-14/E/Enterprisedb.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Enterprisedb
include('simpleicons-14/E/Enterprisedb')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Enterprisedb
include('simpleicons-14/E/Enterprisedb')

' renders the element
Enterprisedb('Enterprisedb', 'Enterprisedb', 'an optional tech label', 'an optional description')
@enduml
```

