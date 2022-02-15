# Amazondynamodb


```text
simpleicons-6/A/Amazondynamodb
```

```text
include('simpleicons-6/A/Amazondynamodb')
```



| Illustration | Amazondynamodb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Amazondynamodb.png) | ![illustration for Amazondynamodb](../../simpleicons-6/A/Amazondynamodb.Local.png) |




## Amazondynamodb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Amazondynamodb
include('simpleicons-6/A/Amazondynamodb')

' renders the element
Amazondynamodb('Amazondynamodb', 'Amazondynamodb', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Amazondynamodb
include('simpleicons-6/A/Amazondynamodb')

' renders the element
Amazondynamodb('Amazondynamodb', 'Amazondynamodb', 'an optional tech label')
@enduml
```

