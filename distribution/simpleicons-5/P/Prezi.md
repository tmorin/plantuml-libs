# Prezi


```text
simpleicons-5/P/Prezi
```

```text
include('simpleicons-5/P/Prezi')
```



| Illustration | Prezi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Prezi.png) | ![illustration for Prezi](../../simpleicons-5/P/Prezi.Local.png) |




## Prezi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Prezi
include('simpleicons-5/P/Prezi')

' renders the element
Prezi('Prezi', 'Prezi', 'an optional tech label')
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

' loads the Item which embeds the element Prezi
include('simpleicons-5/P/Prezi')

' renders the element
Prezi('Prezi', 'Prezi', 'an optional tech label')
@enduml
```

