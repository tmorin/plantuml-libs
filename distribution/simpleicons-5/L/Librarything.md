# Librarything


```text
simpleicons-5/L/Librarything
```

```text
include('simpleicons-5/L/Librarything')
```



| Illustration | Librarything |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/L/Librarything.png) | ![illustration for Librarything](../../simpleicons-5/L/Librarything.Local.png) |




## Librarything

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Librarything
include('simpleicons-5/L/Librarything')

' renders the element
Librarything('Librarything', 'Librarything', 'an optional tech label')
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

' loads the Item which embeds the element Librarything
include('simpleicons-5/L/Librarything')

' renders the element
Librarything('Librarything', 'Librarything', 'an optional tech label')
@enduml
```

