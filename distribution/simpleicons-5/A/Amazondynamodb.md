# Amazondynamodb


```text
simpleicons-5/A/Amazondynamodb
```

```text
include('simpleicons-5/A/Amazondynamodb')
```



| Illustration | Amazondynamodb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Amazondynamodb.png) | ![illustration for Amazondynamodb](../../simpleicons-5/A/Amazondynamodb.Local.png) |




## Amazondynamodb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Amazondynamodb
include('simpleicons-5/A/Amazondynamodb')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Amazondynamodb
include('simpleicons-5/A/Amazondynamodb')

' renders the element
Amazondynamodb('Amazondynamodb', 'Amazondynamodb', 'an optional tech label')
@enduml
```

