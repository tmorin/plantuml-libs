# Numba


```text
simpleicons-7/N/Numba
```

```text
include('simpleicons-7/N/Numba')
```



| Illustration | Numba |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/N/Numba.png) | ![illustration for Numba](../../simpleicons-7/N/Numba.Local.png) |




## Numba

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Numba
include('simpleicons-7/N/Numba')

' renders the element
Numba('Numba', 'Numba', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Numba
include('simpleicons-7/N/Numba')

' renders the element
Numba('Numba', 'Numba', 'an optional tech label', 'an optional description')
@enduml
```

