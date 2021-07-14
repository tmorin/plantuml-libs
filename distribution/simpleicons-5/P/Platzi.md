# Platzi


```text
simpleicons-5/P/Platzi
```

```text
include('simpleicons-5/P/Platzi')
```



| Illustration | Platzi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Platzi.png) | ![illustration for Platzi](../../simpleicons-5/P/Platzi.Local.png) |




## Platzi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Platzi
include('simpleicons-5/P/Platzi')

' renders the element
Platzi('Platzi', 'Platzi', 'an optional tech label')
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

' loads the Item which embeds the element Platzi
include('simpleicons-5/P/Platzi')

' renders the element
Platzi('Platzi', 'Platzi', 'an optional tech label')
@enduml
```

