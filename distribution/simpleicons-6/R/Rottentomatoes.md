# Rottentomatoes


```text
simpleicons-6/R/Rottentomatoes
```

```text
include('simpleicons-6/R/Rottentomatoes')
```



| Illustration | Rottentomatoes |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Rottentomatoes.png) | ![illustration for Rottentomatoes](../../simpleicons-6/R/Rottentomatoes.Local.png) |




## Rottentomatoes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Rottentomatoes
include('simpleicons-6/R/Rottentomatoes')

' renders the element
Rottentomatoes('Rottentomatoes', 'Rottentomatoes', 'an optional tech label')
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

' loads the Item which embeds the element Rottentomatoes
include('simpleicons-6/R/Rottentomatoes')

' renders the element
Rottentomatoes('Rottentomatoes', 'Rottentomatoes', 'an optional tech label')
@enduml
```

