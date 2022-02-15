# Simkl


```text
simpleicons-6/S/Simkl
```

```text
include('simpleicons-6/S/Simkl')
```



| Illustration | Simkl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Simkl.png) | ![illustration for Simkl](../../simpleicons-6/S/Simkl.Local.png) |




## Simkl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Simkl
include('simpleicons-6/S/Simkl')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Simkl
include('simpleicons-6/S/Simkl')

' renders the element
Simkl('Simkl', 'Simkl', 'an optional tech label')
@enduml
```

