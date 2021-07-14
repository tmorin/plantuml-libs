# Blazor


```text
simpleicons-5/B/Blazor
```

```text
include('simpleicons-5/B/Blazor')
```



| Illustration | Blazor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Blazor.png) | ![illustration for Blazor](../../simpleicons-5/B/Blazor.Local.png) |




## Blazor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Blazor
include('simpleicons-5/B/Blazor')

' renders the element
Blazor('Blazor', 'Blazor', 'an optional tech label')
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

' loads the Item which embeds the element Blazor
include('simpleicons-5/B/Blazor')

' renders the element
Blazor('Blazor', 'Blazor', 'an optional tech label')
@enduml
```

