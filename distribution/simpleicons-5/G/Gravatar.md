# Gravatar


```text
simpleicons-5/G/Gravatar
```

```text
include('simpleicons-5/G/Gravatar')
```



| Illustration | Gravatar |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Gravatar.png) | ![illustration for Gravatar](../../simpleicons-5/G/Gravatar.Local.png) |




## Gravatar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Gravatar
include('simpleicons-5/G/Gravatar')

' renders the element
Gravatar('Gravatar', 'Gravatar', 'an optional tech label')
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

' loads the Item which embeds the element Gravatar
include('simpleicons-5/G/Gravatar')

' renders the element
Gravatar('Gravatar', 'Gravatar', 'an optional tech label')
@enduml
```

