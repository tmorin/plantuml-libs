# Lospec


```text
simpleicons-6/L/Lospec
```

```text
include('simpleicons-6/L/Lospec')
```



| Illustration | Lospec |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/L/Lospec.png) | ![illustration for Lospec](../../simpleicons-6/L/Lospec.Local.png) |




## Lospec

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Lospec
include('simpleicons-6/L/Lospec')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Lospec
include('simpleicons-6/L/Lospec')

' renders the element
Lospec('Lospec', 'Lospec', 'an optional tech label')
@enduml
```

