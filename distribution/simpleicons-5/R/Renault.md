# Renault


```text
simpleicons-5/R/Renault
```

```text
include('simpleicons-5/R/Renault')
```



| Illustration | Renault |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Renault.png) | ![illustration for Renault](../../simpleicons-5/R/Renault.Local.png) |




## Renault

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Renault
include('simpleicons-5/R/Renault')

' renders the element
Renault('Renault', 'Renault', 'an optional tech label')
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

' loads the Item which embeds the element Renault
include('simpleicons-5/R/Renault')

' renders the element
Renault('Renault', 'Renault', 'an optional tech label')
@enduml
```

