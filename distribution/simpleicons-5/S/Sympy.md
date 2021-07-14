# Sympy


```text
simpleicons-5/S/Sympy
```

```text
include('simpleicons-5/S/Sympy')
```



| Illustration | Sympy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Sympy.png) | ![illustration for Sympy](../../simpleicons-5/S/Sympy.Local.png) |




## Sympy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Sympy
include('simpleicons-5/S/Sympy')

' renders the element
Sympy('Sympy', 'Sympy', 'an optional tech label')
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

' loads the Item which embeds the element Sympy
include('simpleicons-5/S/Sympy')

' renders the element
Sympy('Sympy', 'Sympy', 'an optional tech label')
@enduml
```

