# Coil


```text
simpleicons-7/C/Coil
```

```text
include('simpleicons-7/C/Coil')
```



| Illustration | Coil |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Coil.png) | ![illustration for Coil](../../simpleicons-7/C/Coil.Local.png) |




## Coil

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Coil
include('simpleicons-7/C/Coil')

' renders the element
Coil('Coil', 'Coil', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Coil
include('simpleicons-7/C/Coil')

' renders the element
Coil('Coil', 'Coil', 'an optional tech label', 'an optional description')
@enduml
```

