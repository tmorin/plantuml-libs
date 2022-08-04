# Vite


```text
simpleicons-7/V/Vite
```

```text
include('simpleicons-7/V/Vite')
```



| Illustration | Vite |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/V/Vite.png) | ![illustration for Vite](../../simpleicons-7/V/Vite.Local.png) |




## Vite

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Vite
include('simpleicons-7/V/Vite')

' renders the element
Vite('Vite', 'Vite', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vite
include('simpleicons-7/V/Vite')

' renders the element
Vite('Vite', 'Vite', 'an optional tech label', 'an optional description')
@enduml
```

