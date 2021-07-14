# Veritas


```text
simpleicons-5/V/Veritas
```

```text
include('simpleicons-5/V/Veritas')
```



| Illustration | Veritas |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/V/Veritas.png) | ![illustration for Veritas](../../simpleicons-5/V/Veritas.Local.png) |




## Veritas

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Veritas
include('simpleicons-5/V/Veritas')

' renders the element
Veritas('Veritas', 'Veritas', 'an optional tech label')
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

' loads the Item which embeds the element Veritas
include('simpleicons-5/V/Veritas')

' renders the element
Veritas('Veritas', 'Veritas', 'an optional tech label')
@enduml
```

