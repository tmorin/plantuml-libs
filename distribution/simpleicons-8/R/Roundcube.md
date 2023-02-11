# Roundcube


```text
simpleicons-8/R/Roundcube
```

```text
include('simpleicons-8/R/Roundcube')
```



| Illustration | Roundcube |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/R/Roundcube.png) | ![illustration for Roundcube](../../simpleicons-8/R/Roundcube.Local.png) |




## Roundcube

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Roundcube
include('simpleicons-8/R/Roundcube')

' renders the element
Roundcube('Roundcube', 'Roundcube', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Roundcube
include('simpleicons-8/R/Roundcube')

' renders the element
Roundcube('Roundcube', 'Roundcube', 'an optional tech label', 'an optional description')
@enduml
```

