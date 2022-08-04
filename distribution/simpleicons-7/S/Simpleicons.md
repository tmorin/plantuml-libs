# Simpleicons


```text
simpleicons-7/S/Simpleicons
```

```text
include('simpleicons-7/S/Simpleicons')
```



| Illustration | Simpleicons |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Simpleicons.png) | ![illustration for Simpleicons](../../simpleicons-7/S/Simpleicons.Local.png) |




## Simpleicons

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Simpleicons
include('simpleicons-7/S/Simpleicons')

' renders the element
Simpleicons('Simpleicons', 'Simpleicons', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Simpleicons
include('simpleicons-7/S/Simpleicons')

' renders the element
Simpleicons('Simpleicons', 'Simpleicons', 'an optional tech label', 'an optional description')
@enduml
```

