# Uikit


```text
simpleicons-5/U/Uikit
```

```text
include('simpleicons-5/U/Uikit')
```



| Illustration | Uikit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/U/Uikit.png) | ![illustration for Uikit](../../simpleicons-5/U/Uikit.Local.png) |




## Uikit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Uikit
include('simpleicons-5/U/Uikit')

' renders the element
Uikit('Uikit', 'Uikit', 'an optional tech label')
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

' loads the Item which embeds the element Uikit
include('simpleicons-5/U/Uikit')

' renders the element
Uikit('Uikit', 'Uikit', 'an optional tech label')
@enduml
```

