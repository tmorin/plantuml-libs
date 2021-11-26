# Jekyll


```text
simpleicons-5/J/Jekyll
```

```text
include('simpleicons-5/J/Jekyll')
```



| Illustration | Jekyll |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/J/Jekyll.png) | ![illustration for Jekyll](../../simpleicons-5/J/Jekyll.Local.png) |




## Jekyll

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Jekyll
include('simpleicons-5/J/Jekyll')

' renders the element
Jekyll('Jekyll', 'Jekyll', 'an optional tech label')
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

' loads the Item which embeds the element Jekyll
include('simpleicons-5/J/Jekyll')

' renders the element
Jekyll('Jekyll', 'Jekyll', 'an optional tech label')
@enduml
```

