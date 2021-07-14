# Iota


```text
simpleicons-5/I/Iota
```

```text
include('simpleicons-5/I/Iota')
```



| Illustration | Iota |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/I/Iota.png) | ![illustration for Iota](../../simpleicons-5/I/Iota.Local.png) |




## Iota

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Iota
include('simpleicons-5/I/Iota')

' renders the element
Iota('Iota', 'Iota', 'an optional tech label')
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

' loads the Item which embeds the element Iota
include('simpleicons-5/I/Iota')

' renders the element
Iota('Iota', 'Iota', 'an optional tech label')
@enduml
```

