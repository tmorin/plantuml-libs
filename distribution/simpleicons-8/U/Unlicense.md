# Unlicense


```text
simpleicons-8/U/Unlicense
```

```text
include('simpleicons-8/U/Unlicense')
```



| Illustration | Unlicense |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/U/Unlicense.png) | ![illustration for Unlicense](../../simpleicons-8/U/Unlicense.Local.png) |




## Unlicense

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Unlicense
include('simpleicons-8/U/Unlicense')

' renders the element
Unlicense('Unlicense', 'Unlicense', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Unlicense
include('simpleicons-8/U/Unlicense')

' renders the element
Unlicense('Unlicense', 'Unlicense', 'an optional tech label', 'an optional description')
@enduml
```

