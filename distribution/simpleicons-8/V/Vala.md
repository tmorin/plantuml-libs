# Vala


```text
simpleicons-8/V/Vala
```

```text
include('simpleicons-8/V/Vala')
```



| Illustration | Vala |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/V/Vala.png) | ![illustration for Vala](../../simpleicons-8/V/Vala.Local.png) |




## Vala

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Vala
include('simpleicons-8/V/Vala')

' renders the element
Vala('Vala', 'Vala', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vala
include('simpleicons-8/V/Vala')

' renders the element
Vala('Vala', 'Vala', 'an optional tech label', 'an optional description')
@enduml
```

