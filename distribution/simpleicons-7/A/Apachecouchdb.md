# Apachecouchdb


```text
simpleicons-7/A/Apachecouchdb
```

```text
include('simpleicons-7/A/Apachecouchdb')
```



| Illustration | Apachecouchdb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Apachecouchdb.png) | ![illustration for Apachecouchdb](../../simpleicons-7/A/Apachecouchdb.Local.png) |




## Apachecouchdb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Apachecouchdb
include('simpleicons-7/A/Apachecouchdb')

' renders the element
Apachecouchdb('Apachecouchdb', 'Apachecouchdb', 'an optional tech label')
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

' loads the Item which embeds the element Apachecouchdb
include('simpleicons-7/A/Apachecouchdb')

' renders the element
Apachecouchdb('Apachecouchdb', 'Apachecouchdb', 'an optional tech label')
@enduml
```

