# Enterprisedb


```text
simpleicons-7/E/Enterprisedb
```

```text
include('simpleicons-7/E/Enterprisedb')
```



| Illustration | Enterprisedb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/E/Enterprisedb.png) | ![illustration for Enterprisedb](../../simpleicons-7/E/Enterprisedb.Local.png) |




## Enterprisedb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Enterprisedb
include('simpleicons-7/E/Enterprisedb')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Enterprisedb
include('simpleicons-7/E/Enterprisedb')

' renders the element
Enterprisedb('Enterprisedb', 'Enterprisedb', 'an optional tech label', 'an optional description')
@enduml
```

