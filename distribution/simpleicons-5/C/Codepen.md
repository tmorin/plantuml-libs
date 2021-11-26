# Codepen


```text
simpleicons-5/C/Codepen
```

```text
include('simpleicons-5/C/Codepen')
```



| Illustration | Codepen |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Codepen.png) | ![illustration for Codepen](../../simpleicons-5/C/Codepen.Local.png) |




## Codepen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Codepen
include('simpleicons-5/C/Codepen')

' renders the element
Codepen('Codepen', 'Codepen', 'an optional tech label')
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

' loads the Item which embeds the element Codepen
include('simpleicons-5/C/Codepen')

' renders the element
Codepen('Codepen', 'Codepen', 'an optional tech label')
@enduml
```

