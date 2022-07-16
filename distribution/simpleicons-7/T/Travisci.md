# Travisci


```text
simpleicons-7/T/Travisci
```

```text
include('simpleicons-7/T/Travisci')
```



| Illustration | Travisci |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Travisci.png) | ![illustration for Travisci](../../simpleicons-7/T/Travisci.Local.png) |




## Travisci

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Travisci
include('simpleicons-7/T/Travisci')

' renders the element
Travisci('Travisci', 'Travisci', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Travisci
include('simpleicons-7/T/Travisci')

' renders the element
Travisci('Travisci', 'Travisci', 'an optional tech label')
@enduml
```

