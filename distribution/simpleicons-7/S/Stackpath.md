# Stackpath


```text
simpleicons-7/S/Stackpath
```

```text
include('simpleicons-7/S/Stackpath')
```



| Illustration | Stackpath |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Stackpath.png) | ![illustration for Stackpath](../../simpleicons-7/S/Stackpath.Local.png) |




## Stackpath

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Stackpath
include('simpleicons-7/S/Stackpath')

' renders the element
Stackpath('Stackpath', 'Stackpath', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Stackpath
include('simpleicons-7/S/Stackpath')

' renders the element
Stackpath('Stackpath', 'Stackpath', 'an optional tech label', 'an optional description')
@enduml
```

