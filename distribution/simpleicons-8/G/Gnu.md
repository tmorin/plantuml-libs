# Gnu


```text
simpleicons-8/G/Gnu
```

```text
include('simpleicons-8/G/Gnu')
```



| Illustration | Gnu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Gnu.png) | ![illustration for Gnu](../../simpleicons-8/G/Gnu.Local.png) |




## Gnu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Gnu
include('simpleicons-8/G/Gnu')

' renders the element
Gnu('Gnu', 'Gnu', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Gnu
include('simpleicons-8/G/Gnu')

' renders the element
Gnu('Gnu', 'Gnu', 'an optional tech label', 'an optional description')
@enduml
```

