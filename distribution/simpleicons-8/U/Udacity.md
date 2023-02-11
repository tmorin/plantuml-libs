# Udacity


```text
simpleicons-8/U/Udacity
```

```text
include('simpleicons-8/U/Udacity')
```



| Illustration | Udacity |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/U/Udacity.png) | ![illustration for Udacity](../../simpleicons-8/U/Udacity.Local.png) |




## Udacity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Udacity
include('simpleicons-8/U/Udacity')

' renders the element
Udacity('Udacity', 'Udacity', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Udacity
include('simpleicons-8/U/Udacity')

' renders the element
Udacity('Udacity', 'Udacity', 'an optional tech label', 'an optional description')
@enduml
```

