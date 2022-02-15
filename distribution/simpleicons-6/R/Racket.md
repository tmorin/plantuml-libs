# Racket


```text
simpleicons-6/R/Racket
```

```text
include('simpleicons-6/R/Racket')
```



| Illustration | Racket |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Racket.png) | ![illustration for Racket](../../simpleicons-6/R/Racket.Local.png) |




## Racket

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Racket
include('simpleicons-6/R/Racket')

' renders the element
Racket('Racket', 'Racket', 'an optional tech label')
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

' loads the Item which embeds the element Racket
include('simpleicons-6/R/Racket')

' renders the element
Racket('Racket', 'Racket', 'an optional tech label')
@enduml
```

