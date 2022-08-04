# Fonoma


```text
simpleicons-7/F/Fonoma
```

```text
include('simpleicons-7/F/Fonoma')
```



| Illustration | Fonoma |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/F/Fonoma.png) | ![illustration for Fonoma](../../simpleicons-7/F/Fonoma.Local.png) |




## Fonoma

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Fonoma
include('simpleicons-7/F/Fonoma')

' renders the element
Fonoma('Fonoma', 'Fonoma', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fonoma
include('simpleicons-7/F/Fonoma')

' renders the element
Fonoma('Fonoma', 'Fonoma', 'an optional tech label', 'an optional description')
@enduml
```

