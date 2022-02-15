# Instacart


```text
simpleicons-6/I/Instacart
```

```text
include('simpleicons-6/I/Instacart')
```



| Illustration | Instacart |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/I/Instacart.png) | ![illustration for Instacart](../../simpleicons-6/I/Instacart.Local.png) |




## Instacart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Instacart
include('simpleicons-6/I/Instacart')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Instacart
include('simpleicons-6/I/Instacart')

' renders the element
Instacart('Instacart', 'Instacart', 'an optional tech label')
@enduml
```

