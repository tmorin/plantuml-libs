# Perforce


```text
simpleicons-8/P/Perforce
```

```text
include('simpleicons-8/P/Perforce')
```



| Illustration | Perforce |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Perforce.png) | ![illustration for Perforce](../../simpleicons-8/P/Perforce.Local.png) |




## Perforce

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Perforce
include('simpleicons-8/P/Perforce')

' renders the element
Perforce('Perforce', 'Perforce', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Perforce
include('simpleicons-8/P/Perforce')

' renders the element
Perforce('Perforce', 'Perforce', 'an optional tech label', 'an optional description')
@enduml
```

