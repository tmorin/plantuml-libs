# Imdb


```text
simpleicons-7/I/Imdb
```

```text
include('simpleicons-7/I/Imdb')
```



| Illustration | Imdb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/I/Imdb.png) | ![illustration for Imdb](../../simpleicons-7/I/Imdb.Local.png) |




## Imdb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Imdb
include('simpleicons-7/I/Imdb')

' renders the element
Imdb('Imdb', 'Imdb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Imdb
include('simpleicons-7/I/Imdb')

' renders the element
Imdb('Imdb', 'Imdb', 'an optional tech label', 'an optional description')
@enduml
```
