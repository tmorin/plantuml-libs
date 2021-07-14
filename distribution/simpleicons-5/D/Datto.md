# Datto


```text
simpleicons-5/D/Datto
```

```text
include('simpleicons-5/D/Datto')
```



| Illustration | Datto |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Datto.png) | ![illustration for Datto](../../simpleicons-5/D/Datto.Local.png) |




## Datto

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Datto
include('simpleicons-5/D/Datto')

' renders the element
Datto('Datto', 'Datto', 'an optional tech label')
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

' loads the Item which embeds the element Datto
include('simpleicons-5/D/Datto')

' renders the element
Datto('Datto', 'Datto', 'an optional tech label')
@enduml
```

