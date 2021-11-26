# Reactivex


```text
simpleicons-5/R/Reactivex
```

```text
include('simpleicons-5/R/Reactivex')
```



| Illustration | Reactivex |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Reactivex.png) | ![illustration for Reactivex](../../simpleicons-5/R/Reactivex.Local.png) |




## Reactivex

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Reactivex
include('simpleicons-5/R/Reactivex')

' renders the element
Reactivex('Reactivex', 'Reactivex', 'an optional tech label')
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

' loads the Item which embeds the element Reactivex
include('simpleicons-5/R/Reactivex')

' renders the element
Reactivex('Reactivex', 'Reactivex', 'an optional tech label')
@enduml
```

