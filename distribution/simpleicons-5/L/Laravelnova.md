# Laravelnova


```text
simpleicons-5/L/Laravelnova
```

```text
include('simpleicons-5/L/Laravelnova')
```



| Illustration | Laravelnova |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/L/Laravelnova.png) | ![illustration for Laravelnova](../../simpleicons-5/L/Laravelnova.Local.png) |




## Laravelnova

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Laravelnova
include('simpleicons-5/L/Laravelnova')

' renders the element
Laravelnova('Laravelnova', 'Laravelnova', 'an optional tech label')
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

' loads the Item which embeds the element Laravelnova
include('simpleicons-5/L/Laravelnova')

' renders the element
Laravelnova('Laravelnova', 'Laravelnova', 'an optional tech label')
@enduml
```

