# Roundcube


```text
simpleicons-5/R/Roundcube
```

```text
include('simpleicons-5/R/Roundcube')
```



| Illustration | Roundcube |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Roundcube.png) | ![illustration for Roundcube](../../simpleicons-5/R/Roundcube.Local.png) |




## Roundcube

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Roundcube
include('simpleicons-5/R/Roundcube')

' renders the element
Roundcube('Roundcube', 'Roundcube', 'an optional tech label')
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

' loads the Item which embeds the element Roundcube
include('simpleicons-5/R/Roundcube')

' renders the element
Roundcube('Roundcube', 'Roundcube', 'an optional tech label')
@enduml
```

