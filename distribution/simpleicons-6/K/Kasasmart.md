# Kasasmart


```text
simpleicons-6/K/Kasasmart
```

```text
include('simpleicons-6/K/Kasasmart')
```



| Illustration | Kasasmart |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/K/Kasasmart.png) | ![illustration for Kasasmart](../../simpleicons-6/K/Kasasmart.Local.png) |




## Kasasmart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Kasasmart
include('simpleicons-6/K/Kasasmart')

' renders the element
Kasasmart('Kasasmart', 'Kasasmart', 'an optional tech label')
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

' loads the Item which embeds the element Kasasmart
include('simpleicons-6/K/Kasasmart')

' renders the element
Kasasmart('Kasasmart', 'Kasasmart', 'an optional tech label')
@enduml
```

