# Roots


```text
simpleicons-7/R/Roots
```

```text
include('simpleicons-7/R/Roots')
```



| Illustration | Roots |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/Roots.png) | ![illustration for Roots](../../simpleicons-7/R/Roots.Local.png) |




## Roots

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Roots
include('simpleicons-7/R/Roots')

' renders the element
Roots('Roots', 'Roots', 'an optional tech label')
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

' loads the Item which embeds the element Roots
include('simpleicons-7/R/Roots')

' renders the element
Roots('Roots', 'Roots', 'an optional tech label')
@enduml
```

