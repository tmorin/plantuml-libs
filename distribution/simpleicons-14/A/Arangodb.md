# Arangodb


```text
simpleicons-14/A/Arangodb
```

```text
include('simpleicons-14/A/Arangodb')
```



| Illustration | Arangodb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Arangodb.png) | ![illustration for Arangodb](../../simpleicons-14/A/Arangodb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArangodbXs>`
- `<$ArangodbSm>`
- `<$ArangodbMd>`
- `<$ArangodbLg>`





## Arangodb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Arangodb
include('simpleicons-14/A/Arangodb')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Arangodb
include('simpleicons-14/A/Arangodb')

' renders the element
Arangodb('Arangodb', 'Arangodb', 'an optional tech label', 'an optional description')
@enduml
```

