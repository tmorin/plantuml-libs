# Instacart


```text
simpleicons-5/I/Instacart
```

```text
include('simpleicons-5/I/Instacart')
```



| Illustration | Instacart |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/I/Instacart.png) | ![illustration for Instacart](../../simpleicons-5/I/Instacart.Local.png) |




## Instacart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Instacart
include('simpleicons-5/I/Instacart')

' renders the element
Instacart('Instacart', 'Instacart', 'an optional tech label')
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

' loads the Item which embeds the element Instacart
include('simpleicons-5/I/Instacart')

' renders the element
Instacart('Instacart', 'Instacart', 'an optional tech label')
@enduml
```

