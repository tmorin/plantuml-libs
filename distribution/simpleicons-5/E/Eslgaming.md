# Eslgaming


```text
simpleicons-5/E/Eslgaming
```

```text
include('simpleicons-5/E/Eslgaming')
```



| Illustration | Eslgaming |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/E/Eslgaming.png) | ![illustration for Eslgaming](../../simpleicons-5/E/Eslgaming.Local.png) |




## Eslgaming

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Eslgaming
include('simpleicons-5/E/Eslgaming')

' renders the element
Eslgaming('Eslgaming', 'Eslgaming', 'an optional tech label')
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

' loads the Item which embeds the element Eslgaming
include('simpleicons-5/E/Eslgaming')

' renders the element
Eslgaming('Eslgaming', 'Eslgaming', 'an optional tech label')
@enduml
```

