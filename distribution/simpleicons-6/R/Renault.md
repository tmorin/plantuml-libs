# Renault


```text
simpleicons-6/R/Renault
```

```text
include('simpleicons-6/R/Renault')
```



| Illustration | Renault |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Renault.png) | ![illustration for Renault](../../simpleicons-6/R/Renault.Local.png) |




## Renault

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Renault
include('simpleicons-6/R/Renault')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Renault
include('simpleicons-6/R/Renault')

' renders the element
Renault('Renault', 'Renault', 'an optional tech label')
@enduml
```

