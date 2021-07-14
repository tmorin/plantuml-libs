# Simkl


```text
simpleicons-5/S/Simkl
```

```text
include('simpleicons-5/S/Simkl')
```



| Illustration | Simkl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Simkl.png) | ![illustration for Simkl](../../simpleicons-5/S/Simkl.Local.png) |




## Simkl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Simkl
include('simpleicons-5/S/Simkl')

' renders the element
Simkl('Simkl', 'Simkl', 'an optional tech label')
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

' loads the Item which embeds the element Simkl
include('simpleicons-5/S/Simkl')

' renders the element
Simkl('Simkl', 'Simkl', 'an optional tech label')
@enduml
```

