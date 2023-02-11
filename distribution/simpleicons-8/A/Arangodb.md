# Arangodb


```text
simpleicons-8/A/Arangodb
```

```text
include('simpleicons-8/A/Arangodb')
```



| Illustration | Arangodb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Arangodb.png) | ![illustration for Arangodb](../../simpleicons-8/A/Arangodb.Local.png) |




## Arangodb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Arangodb
include('simpleicons-8/A/Arangodb')

' renders the element
Arangodb('Arangodb', 'Arangodb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Arangodb
include('simpleicons-8/A/Arangodb')

' renders the element
Arangodb('Arangodb', 'Arangodb', 'an optional tech label', 'an optional description')
@enduml
```

