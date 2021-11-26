# Warnerbros


```text
simpleicons-5/W/Warnerbros
```

```text
include('simpleicons-5/W/Warnerbros')
```



| Illustration | Warnerbros |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/W/Warnerbros.png) | ![illustration for Warnerbros](../../simpleicons-5/W/Warnerbros.Local.png) |




## Warnerbros

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Warnerbros
include('simpleicons-5/W/Warnerbros')

' renders the element
Warnerbros('Warnerbros', 'Warnerbros', 'an optional tech label')
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

' loads the Item which embeds the element Warnerbros
include('simpleicons-5/W/Warnerbros')

' renders the element
Warnerbros('Warnerbros', 'Warnerbros', 'an optional tech label')
@enduml
```

