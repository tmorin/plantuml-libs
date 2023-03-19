# Apachecassandra


```text
simpleicons-8/A/Apachecassandra
```

```text
include('simpleicons-8/A/Apachecassandra')
```



| Illustration | Apachecassandra |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Apachecassandra.png) | ![illustration for Apachecassandra](../../simpleicons-8/A/Apachecassandra.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApachecassandraXs>`
- `<$ApachecassandraSm>`
- `<$ApachecassandraMd>`
- `<$ApachecassandraLg>`





## Apachecassandra

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Apachecassandra
include('simpleicons-8/A/Apachecassandra')

' renders the element
Apachecassandra('Apachecassandra', 'Apachecassandra', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Apachecassandra
include('simpleicons-8/A/Apachecassandra')

' renders the element
Apachecassandra('Apachecassandra', 'Apachecassandra', 'an optional tech label', 'an optional description')
@enduml
```

