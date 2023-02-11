# Rewe


```text
simpleicons-8/R/Rewe
```

```text
include('simpleicons-8/R/Rewe')
```



| Illustration | Rewe |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/R/Rewe.png) | ![illustration for Rewe](../../simpleicons-8/R/Rewe.Local.png) |




## Rewe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Rewe
include('simpleicons-8/R/Rewe')

' renders the element
Rewe('Rewe', 'Rewe', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Rewe
include('simpleicons-8/R/Rewe')

' renders the element
Rewe('Rewe', 'Rewe', 'an optional tech label', 'an optional description')
@enduml
```

