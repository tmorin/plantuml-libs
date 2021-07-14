# Arangodb


```text
simpleicons-5/A/Arangodb
```

```text
include('simpleicons-5/A/Arangodb')
```



| Illustration | Arangodb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Arangodb.png) | ![illustration for Arangodb](../../simpleicons-5/A/Arangodb.Local.png) |




## Arangodb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Arangodb
include('simpleicons-5/A/Arangodb')

' renders the element
Arangodb('Arangodb', 'Arangodb', 'an optional tech label')
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

' loads the Item which embeds the element Arangodb
include('simpleicons-5/A/Arangodb')

' renders the element
Arangodb('Arangodb', 'Arangodb', 'an optional tech label')
@enduml
```

