# Carrefour


```text
simpleicons-7/C/Carrefour
```

```text
include('simpleicons-7/C/Carrefour')
```



| Illustration | Carrefour |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Carrefour.png) | ![illustration for Carrefour](../../simpleicons-7/C/Carrefour.Local.png) |




## Carrefour

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Carrefour
include('simpleicons-7/C/Carrefour')

' renders the element
Carrefour('Carrefour', 'Carrefour', 'an optional tech label')
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

' loads the Item which embeds the element Carrefour
include('simpleicons-7/C/Carrefour')

' renders the element
Carrefour('Carrefour', 'Carrefour', 'an optional tech label')
@enduml
```

