# Comsol


```text
simpleicons-7/C/Comsol
```

```text
include('simpleicons-7/C/Comsol')
```



| Illustration | Comsol |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Comsol.png) | ![illustration for Comsol](../../simpleicons-7/C/Comsol.Local.png) |




## Comsol

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Comsol
include('simpleicons-7/C/Comsol')

' renders the element
Comsol('Comsol', 'Comsol', 'an optional tech label')
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

' loads the Item which embeds the element Comsol
include('simpleicons-7/C/Comsol')

' renders the element
Comsol('Comsol', 'Comsol', 'an optional tech label')
@enduml
```

