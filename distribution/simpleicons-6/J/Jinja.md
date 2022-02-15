# Jinja


```text
simpleicons-6/J/Jinja
```

```text
include('simpleicons-6/J/Jinja')
```



| Illustration | Jinja |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/J/Jinja.png) | ![illustration for Jinja](../../simpleicons-6/J/Jinja.Local.png) |




## Jinja

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Jinja
include('simpleicons-6/J/Jinja')

' renders the element
Jinja('Jinja', 'Jinja', 'an optional tech label')
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

' loads the Item which embeds the element Jinja
include('simpleicons-6/J/Jinja')

' renders the element
Jinja('Jinja', 'Jinja', 'an optional tech label')
@enduml
```

