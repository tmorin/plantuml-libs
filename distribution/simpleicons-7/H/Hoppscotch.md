# Hoppscotch


```text
simpleicons-7/H/Hoppscotch
```

```text
include('simpleicons-7/H/Hoppscotch')
```



| Illustration | Hoppscotch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/H/Hoppscotch.png) | ![illustration for Hoppscotch](../../simpleicons-7/H/Hoppscotch.Local.png) |




## Hoppscotch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Hoppscotch
include('simpleicons-7/H/Hoppscotch')

' renders the element
Hoppscotch('Hoppscotch', 'Hoppscotch', 'an optional tech label')
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

' loads the Item which embeds the element Hoppscotch
include('simpleicons-7/H/Hoppscotch')

' renders the element
Hoppscotch('Hoppscotch', 'Hoppscotch', 'an optional tech label')
@enduml
```

