# Internetarchive


```text
simpleicons-7/I/Internetarchive
```

```text
include('simpleicons-7/I/Internetarchive')
```



| Illustration | Internetarchive |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/I/Internetarchive.png) | ![illustration for Internetarchive](../../simpleicons-7/I/Internetarchive.Local.png) |




## Internetarchive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Internetarchive
include('simpleicons-7/I/Internetarchive')

' renders the element
Internetarchive('Internetarchive', 'Internetarchive', 'an optional tech label')
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

' loads the Item which embeds the element Internetarchive
include('simpleicons-7/I/Internetarchive')

' renders the element
Internetarchive('Internetarchive', 'Internetarchive', 'an optional tech label')
@enduml
```

