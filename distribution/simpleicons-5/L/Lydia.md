# Lydia


```text
simpleicons-5/L/Lydia
```

```text
include('simpleicons-5/L/Lydia')
```



| Illustration | Lydia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/L/Lydia.png) | ![illustration for Lydia](../../simpleicons-5/L/Lydia.Local.png) |




## Lydia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Lydia
include('simpleicons-5/L/Lydia')

' renders the element
Lydia('Lydia', 'Lydia', 'an optional tech label')
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

' loads the Item which embeds the element Lydia
include('simpleicons-5/L/Lydia')

' renders the element
Lydia('Lydia', 'Lydia', 'an optional tech label')
@enduml
```

