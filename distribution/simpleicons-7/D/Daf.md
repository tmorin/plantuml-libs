# Daf


```text
simpleicons-7/D/Daf
```

```text
include('simpleicons-7/D/Daf')
```



| Illustration | Daf |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/D/Daf.png) | ![illustration for Daf](../../simpleicons-7/D/Daf.Local.png) |




## Daf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Daf
include('simpleicons-7/D/Daf')

' renders the element
Daf('Daf', 'Daf', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Daf
include('simpleicons-7/D/Daf')

' renders the element
Daf('Daf', 'Daf', 'an optional tech label', 'an optional description')
@enduml
```

