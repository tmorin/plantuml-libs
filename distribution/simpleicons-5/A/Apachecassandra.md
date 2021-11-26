# Apachecassandra


```text
simpleicons-5/A/Apachecassandra
```

```text
include('simpleicons-5/A/Apachecassandra')
```



| Illustration | Apachecassandra |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Apachecassandra.png) | ![illustration for Apachecassandra](../../simpleicons-5/A/Apachecassandra.Local.png) |




## Apachecassandra

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Apachecassandra
include('simpleicons-5/A/Apachecassandra')

' renders the element
Apachecassandra('Apachecassandra', 'Apachecassandra', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Apachecassandra
include('simpleicons-5/A/Apachecassandra')

' renders the element
Apachecassandra('Apachecassandra', 'Apachecassandra', 'an optional tech label')
@enduml
```

