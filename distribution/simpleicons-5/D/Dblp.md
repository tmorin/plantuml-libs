# Dblp


```text
simpleicons-5/D/Dblp
```

```text
include('simpleicons-5/D/Dblp')
```



| Illustration | Dblp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Dblp.png) | ![illustration for Dblp](../../simpleicons-5/D/Dblp.Local.png) |




## Dblp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Dblp
include('simpleicons-5/D/Dblp')

' renders the element
Dblp('Dblp', 'Dblp', 'an optional tech label')
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

' loads the Item which embeds the element Dblp
include('simpleicons-5/D/Dblp')

' renders the element
Dblp('Dblp', 'Dblp', 'an optional tech label')
@enduml
```

