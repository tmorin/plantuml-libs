# Bandsintown


```text
simpleicons-6/B/Bandsintown
```

```text
include('simpleicons-6/B/Bandsintown')
```



| Illustration | Bandsintown |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Bandsintown.png) | ![illustration for Bandsintown](../../simpleicons-6/B/Bandsintown.Local.png) |




## Bandsintown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Bandsintown
include('simpleicons-6/B/Bandsintown')

' renders the element
Bandsintown('Bandsintown', 'Bandsintown', 'an optional tech label')
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

' loads the Item which embeds the element Bandsintown
include('simpleicons-6/B/Bandsintown')

' renders the element
Bandsintown('Bandsintown', 'Bandsintown', 'an optional tech label')
@enduml
```

