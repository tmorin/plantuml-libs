# Opslevel


```text
simpleicons-8/O/Opslevel
```

```text
include('simpleicons-8/O/Opslevel')
```



| Illustration | Opslevel |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/O/Opslevel.png) | ![illustration for Opslevel](../../simpleicons-8/O/Opslevel.Local.png) |




## Opslevel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Opslevel
include('simpleicons-8/O/Opslevel')

' renders the element
Opslevel('Opslevel', 'Opslevel', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Opslevel
include('simpleicons-8/O/Opslevel')

' renders the element
Opslevel('Opslevel', 'Opslevel', 'an optional tech label', 'an optional description')
@enduml
```

