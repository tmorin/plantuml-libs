# Ea


```text
simpleicons-5/E/Ea
```

```text
include('simpleicons-5/E/Ea')
```



| Illustration | Ea |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/E/Ea.png) | ![illustration for Ea](../../simpleicons-5/E/Ea.Local.png) |




## Ea

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Ea
include('simpleicons-5/E/Ea')

' renders the element
Ea('Ea', 'Ea', 'an optional tech label')
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

' loads the Item which embeds the element Ea
include('simpleicons-5/E/Ea')

' renders the element
Ea('Ea', 'Ea', 'an optional tech label')
@enduml
```

