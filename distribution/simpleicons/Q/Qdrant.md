# Qdrant


```text
simpleicons/Q/Qdrant
```

```text
include('simpleicons/Q/Qdrant')
```



| Illustration | Qdrant |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Q/Qdrant.png) | ![illustration for Qdrant](../../simpleicons/Q/Qdrant.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QdrantXs>`
- `<$QdrantSm>`
- `<$QdrantMd>`
- `<$QdrantLg>`





## Qdrant

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Qdrant
include('simpleicons/Q/Qdrant')

' renders the element
Qdrant('Qdrant', 'Qdrant', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Qdrant
include('simpleicons/Q/Qdrant')

' renders the element
Qdrant('Qdrant', 'Qdrant', 'an optional tech label', 'an optional description')
@enduml
```

