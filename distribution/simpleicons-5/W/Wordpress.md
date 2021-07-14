# Wordpress


```text
simpleicons-5/W/Wordpress
```

```text
include('simpleicons-5/W/Wordpress')
```



| Illustration | Wordpress |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/W/Wordpress.png) | ![illustration for Wordpress](../../simpleicons-5/W/Wordpress.Local.png) |




## Wordpress

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Wordpress
include('simpleicons-5/W/Wordpress')

' renders the element
Wordpress('Wordpress', 'Wordpress', 'an optional tech label')
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

' loads the Item which embeds the element Wordpress
include('simpleicons-5/W/Wordpress')

' renders the element
Wordpress('Wordpress', 'Wordpress', 'an optional tech label')
@enduml
```

