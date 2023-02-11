# Solid


```text
simpleicons-8/S/Solid
```

```text
include('simpleicons-8/S/Solid')
```



| Illustration | Solid |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Solid.png) | ![illustration for Solid](../../simpleicons-8/S/Solid.Local.png) |




## Solid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Solid
include('simpleicons-8/S/Solid')

' renders the element
Solid('Solid', 'Solid', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Solid
include('simpleicons-8/S/Solid')

' renders the element
Solid('Solid', 'Solid', 'an optional tech label', 'an optional description')
@enduml
```

