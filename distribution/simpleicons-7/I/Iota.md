# Iota


```text
simpleicons-7/I/Iota
```

```text
include('simpleicons-7/I/Iota')
```



| Illustration | Iota |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/I/Iota.png) | ![illustration for Iota](../../simpleicons-7/I/Iota.Local.png) |




## Iota

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Iota
include('simpleicons-7/I/Iota')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Iota
include('simpleicons-7/I/Iota')

' renders the element
Iota('Iota', 'Iota', 'an optional tech label')
@enduml
```

