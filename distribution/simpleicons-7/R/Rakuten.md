# Rakuten


```text
simpleicons-7/R/Rakuten
```

```text
include('simpleicons-7/R/Rakuten')
```



| Illustration | Rakuten |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/Rakuten.png) | ![illustration for Rakuten](../../simpleicons-7/R/Rakuten.Local.png) |




## Rakuten

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Rakuten
include('simpleicons-7/R/Rakuten')

' renders the element
Rakuten('Rakuten', 'Rakuten', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rakuten
include('simpleicons-7/R/Rakuten')

' renders the element
Rakuten('Rakuten', 'Rakuten', 'an optional tech label', 'an optional description')
@enduml
```

