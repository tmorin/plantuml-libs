# Poly


```text
simpleicons-7/P/Poly
```

```text
include('simpleicons-7/P/Poly')
```



| Illustration | Poly |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Poly.png) | ![illustration for Poly](../../simpleicons-7/P/Poly.Local.png) |




## Poly

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Poly
include('simpleicons-7/P/Poly')

' renders the element
Poly('Poly', 'Poly', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Poly
include('simpleicons-7/P/Poly')

' renders the element
Poly('Poly', 'Poly', 'an optional tech label', 'an optional description')
@enduml
```

