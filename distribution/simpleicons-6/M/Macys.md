# Macys


```text
simpleicons-6/M/Macys
```

```text
include('simpleicons-6/M/Macys')
```



| Illustration | Macys |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Macys.png) | ![illustration for Macys](../../simpleicons-6/M/Macys.Local.png) |




## Macys

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Macys
include('simpleicons-6/M/Macys')

' renders the element
Macys('Macys', 'Macys', 'an optional tech label')
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

' loads the Item which embeds the element Macys
include('simpleicons-6/M/Macys')

' renders the element
Macys('Macys', 'Macys', 'an optional tech label')
@enduml
```

