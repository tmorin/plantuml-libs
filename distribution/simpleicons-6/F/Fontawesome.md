# Fontawesome


```text
simpleicons-6/F/Fontawesome
```

```text
include('simpleicons-6/F/Fontawesome')
```



| Illustration | Fontawesome |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Fontawesome.png) | ![illustration for Fontawesome](../../simpleicons-6/F/Fontawesome.Local.png) |




## Fontawesome

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Fontawesome
include('simpleicons-6/F/Fontawesome')

' renders the element
Fontawesome('Fontawesome', 'Fontawesome', 'an optional tech label')
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

' loads the Item which embeds the element Fontawesome
include('simpleicons-6/F/Fontawesome')

' renders the element
Fontawesome('Fontawesome', 'Fontawesome', 'an optional tech label')
@enduml
```

