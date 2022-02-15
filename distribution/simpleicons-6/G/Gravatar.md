# Gravatar


```text
simpleicons-6/G/Gravatar
```

```text
include('simpleicons-6/G/Gravatar')
```



| Illustration | Gravatar |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Gravatar.png) | ![illustration for Gravatar](../../simpleicons-6/G/Gravatar.Local.png) |




## Gravatar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Gravatar
include('simpleicons-6/G/Gravatar')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Gravatar
include('simpleicons-6/G/Gravatar')

' renders the element
Gravatar('Gravatar', 'Gravatar', 'an optional tech label')
@enduml
```

