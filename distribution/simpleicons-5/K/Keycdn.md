# Keycdn


```text
simpleicons-5/K/Keycdn
```

```text
include('simpleicons-5/K/Keycdn')
```



| Illustration | Keycdn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Keycdn.png) | ![illustration for Keycdn](../../simpleicons-5/K/Keycdn.Local.png) |




## Keycdn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Keycdn
include('simpleicons-5/K/Keycdn')

' renders the element
Keycdn('Keycdn', 'Keycdn', 'an optional tech label')
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

' loads the Item which embeds the element Keycdn
include('simpleicons-5/K/Keycdn')

' renders the element
Keycdn('Keycdn', 'Keycdn', 'an optional tech label')
@enduml
```

