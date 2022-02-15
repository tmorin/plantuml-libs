# Roundcube


```text
simpleicons-6/R/Roundcube
```

```text
include('simpleicons-6/R/Roundcube')
```



| Illustration | Roundcube |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Roundcube.png) | ![illustration for Roundcube](../../simpleicons-6/R/Roundcube.Local.png) |




## Roundcube

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Roundcube
include('simpleicons-6/R/Roundcube')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Roundcube
include('simpleicons-6/R/Roundcube')

' renders the element
Roundcube('Roundcube', 'Roundcube', 'an optional tech label')
@enduml
```

