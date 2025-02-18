# Apachecouchdb


```text
simpleicons-14/A/Apachecouchdb
```

```text
include('simpleicons-14/A/Apachecouchdb')
```



| Illustration | Apachecouchdb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Apachecouchdb.png) | ![illustration for Apachecouchdb](../../simpleicons-14/A/Apachecouchdb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApachecouchdbXs>`
- `<$ApachecouchdbSm>`
- `<$ApachecouchdbMd>`
- `<$ApachecouchdbLg>`





## Apachecouchdb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Apachecouchdb
include('simpleicons-14/A/Apachecouchdb')

' renders the element
Apachecouchdb('Apachecouchdb', 'Apachecouchdb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Apachecouchdb
include('simpleicons-14/A/Apachecouchdb')

' renders the element
Apachecouchdb('Apachecouchdb', 'Apachecouchdb', 'an optional tech label', 'an optional description')
@enduml
```

