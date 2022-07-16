# Marko


```text
simpleicons-7/M/Marko
```

```text
include('simpleicons-7/M/Marko')
```



| Illustration | Marko |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Marko.png) | ![illustration for Marko](../../simpleicons-7/M/Marko.Local.png) |




## Marko

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Marko
include('simpleicons-7/M/Marko')

' renders the element
Marko('Marko', 'Marko', 'an optional tech label')
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

' loads the Item which embeds the element Marko
include('simpleicons-7/M/Marko')

' renders the element
Marko('Marko', 'Marko', 'an optional tech label')
@enduml
```

