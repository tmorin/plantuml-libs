# Porsche


```text
simpleicons-7/P/Porsche
```

```text
include('simpleicons-7/P/Porsche')
```



| Illustration | Porsche |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Porsche.png) | ![illustration for Porsche](../../simpleicons-7/P/Porsche.Local.png) |




## Porsche

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Porsche
include('simpleicons-7/P/Porsche')

' renders the element
Porsche('Porsche', 'Porsche', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Porsche
include('simpleicons-7/P/Porsche')

' renders the element
Porsche('Porsche', 'Porsche', 'an optional tech label', 'an optional description')
@enduml
```

