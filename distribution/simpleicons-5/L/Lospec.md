# Lospec


```text
simpleicons-5/L/Lospec
```

```text
include('simpleicons-5/L/Lospec')
```



| Illustration | Lospec |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/L/Lospec.png) | ![illustration for Lospec](../../simpleicons-5/L/Lospec.Local.png) |




## Lospec

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Lospec
include('simpleicons-5/L/Lospec')

' renders the element
Lospec('Lospec', 'Lospec', 'an optional tech label')
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

' loads the Item which embeds the element Lospec
include('simpleicons-5/L/Lospec')

' renders the element
Lospec('Lospec', 'Lospec', 'an optional tech label')
@enduml
```

