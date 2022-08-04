# Intigriti


```text
simpleicons-7/I/Intigriti
```

```text
include('simpleicons-7/I/Intigriti')
```



| Illustration | Intigriti |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/I/Intigriti.png) | ![illustration for Intigriti](../../simpleicons-7/I/Intigriti.Local.png) |




## Intigriti

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Intigriti
include('simpleicons-7/I/Intigriti')

' renders the element
Intigriti('Intigriti', 'Intigriti', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Intigriti
include('simpleicons-7/I/Intigriti')

' renders the element
Intigriti('Intigriti', 'Intigriti', 'an optional tech label', 'an optional description')
@enduml
```

