# Homify


```text
simpleicons-5/H/Homify
```

```text
include('simpleicons-5/H/Homify')
```



| Illustration | Homify |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Homify.png) | ![illustration for Homify](../../simpleicons-5/H/Homify.Local.png) |




## Homify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Homify
include('simpleicons-5/H/Homify')

' renders the element
Homify('Homify', 'Homify', 'an optional tech label')
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

' loads the Item which embeds the element Homify
include('simpleicons-5/H/Homify')

' renders the element
Homify('Homify', 'Homify', 'an optional tech label')
@enduml
```

