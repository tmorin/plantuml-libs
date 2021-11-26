# Intigriti


```text
simpleicons-5/I/Intigriti
```

```text
include('simpleicons-5/I/Intigriti')
```



| Illustration | Intigriti |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/I/Intigriti.png) | ![illustration for Intigriti](../../simpleicons-5/I/Intigriti.Local.png) |




## Intigriti

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Intigriti
include('simpleicons-5/I/Intigriti')

' renders the element
Intigriti('Intigriti', 'Intigriti', 'an optional tech label')
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

' loads the Item which embeds the element Intigriti
include('simpleicons-5/I/Intigriti')

' renders the element
Intigriti('Intigriti', 'Intigriti', 'an optional tech label')
@enduml
```

