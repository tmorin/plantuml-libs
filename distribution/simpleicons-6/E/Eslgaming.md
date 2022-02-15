# Eslgaming


```text
simpleicons-6/E/Eslgaming
```

```text
include('simpleicons-6/E/Eslgaming')
```



| Illustration | Eslgaming |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/E/Eslgaming.png) | ![illustration for Eslgaming](../../simpleicons-6/E/Eslgaming.Local.png) |




## Eslgaming

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Eslgaming
include('simpleicons-6/E/Eslgaming')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Eslgaming
include('simpleicons-6/E/Eslgaming')

' renders the element
Eslgaming('Eslgaming', 'Eslgaming', 'an optional tech label')
@enduml
```

