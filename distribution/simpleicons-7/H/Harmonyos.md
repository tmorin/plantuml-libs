# Harmonyos


```text
simpleicons-7/H/Harmonyos
```

```text
include('simpleicons-7/H/Harmonyos')
```



| Illustration | Harmonyos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/H/Harmonyos.png) | ![illustration for Harmonyos](../../simpleicons-7/H/Harmonyos.Local.png) |




## Harmonyos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Harmonyos
include('simpleicons-7/H/Harmonyos')

' renders the element
Harmonyos('Harmonyos', 'Harmonyos', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Harmonyos
include('simpleicons-7/H/Harmonyos')

' renders the element
Harmonyos('Harmonyos', 'Harmonyos', 'an optional tech label', 'an optional description')
@enduml
```

