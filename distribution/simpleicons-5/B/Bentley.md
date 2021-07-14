# Bentley


```text
simpleicons-5/B/Bentley
```

```text
include('simpleicons-5/B/Bentley')
```



| Illustration | Bentley |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Bentley.png) | ![illustration for Bentley](../../simpleicons-5/B/Bentley.Local.png) |




## Bentley

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Bentley
include('simpleicons-5/B/Bentley')

' renders the element
Bentley('Bentley', 'Bentley', 'an optional tech label')
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

' loads the Item which embeds the element Bentley
include('simpleicons-5/B/Bentley')

' renders the element
Bentley('Bentley', 'Bentley', 'an optional tech label')
@enduml
```

