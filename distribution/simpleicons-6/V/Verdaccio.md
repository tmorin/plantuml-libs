# Verdaccio


```text
simpleicons-6/V/Verdaccio
```

```text
include('simpleicons-6/V/Verdaccio')
```



| Illustration | Verdaccio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/V/Verdaccio.png) | ![illustration for Verdaccio](../../simpleicons-6/V/Verdaccio.Local.png) |




## Verdaccio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Verdaccio
include('simpleicons-6/V/Verdaccio')

' renders the element
Verdaccio('Verdaccio', 'Verdaccio', 'an optional tech label')
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

' loads the Item which embeds the element Verdaccio
include('simpleicons-6/V/Verdaccio')

' renders the element
Verdaccio('Verdaccio', 'Verdaccio', 'an optional tech label')
@enduml
```

