# Fonoma


```text
simpleicons-6/F/Fonoma
```

```text
include('simpleicons-6/F/Fonoma')
```



| Illustration | Fonoma |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Fonoma.png) | ![illustration for Fonoma](../../simpleicons-6/F/Fonoma.Local.png) |




## Fonoma

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Fonoma
include('simpleicons-6/F/Fonoma')

' renders the element
Fonoma('Fonoma', 'Fonoma', 'an optional tech label')
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

' loads the Item which embeds the element Fonoma
include('simpleicons-6/F/Fonoma')

' renders the element
Fonoma('Fonoma', 'Fonoma', 'an optional tech label')
@enduml
```

