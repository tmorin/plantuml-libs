# Datto


```text
simpleicons-6/D/Datto
```

```text
include('simpleicons-6/D/Datto')
```



| Illustration | Datto |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/D/Datto.png) | ![illustration for Datto](../../simpleicons-6/D/Datto.Local.png) |




## Datto

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Datto
include('simpleicons-6/D/Datto')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Datto
include('simpleicons-6/D/Datto')

' renders the element
Datto('Datto', 'Datto', 'an optional tech label')
@enduml
```

