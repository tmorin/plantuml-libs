# Astonmartin


```text
simpleicons-7/A/Astonmartin
```

```text
include('simpleicons-7/A/Astonmartin')
```



| Illustration | Astonmartin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Astonmartin.png) | ![illustration for Astonmartin](../../simpleicons-7/A/Astonmartin.Local.png) |




## Astonmartin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Astonmartin
include('simpleicons-7/A/Astonmartin')

' renders the element
Astonmartin('Astonmartin', 'Astonmartin', 'an optional tech label')
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

' loads the Item which embeds the element Astonmartin
include('simpleicons-7/A/Astonmartin')

' renders the element
Astonmartin('Astonmartin', 'Astonmartin', 'an optional tech label')
@enduml
```

