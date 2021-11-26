# Cliqz


```text
simpleicons-5/C/Cliqz
```

```text
include('simpleicons-5/C/Cliqz')
```



| Illustration | Cliqz |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Cliqz.png) | ![illustration for Cliqz](../../simpleicons-5/C/Cliqz.Local.png) |




## Cliqz

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Cliqz
include('simpleicons-5/C/Cliqz')

' renders the element
Cliqz('Cliqz', 'Cliqz', 'an optional tech label')
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

' loads the Item which embeds the element Cliqz
include('simpleicons-5/C/Cliqz')

' renders the element
Cliqz('Cliqz', 'Cliqz', 'an optional tech label')
@enduml
```

