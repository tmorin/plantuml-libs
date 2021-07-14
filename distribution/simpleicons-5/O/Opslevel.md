# Opslevel


```text
simpleicons-5/O/Opslevel
```

```text
include('simpleicons-5/O/Opslevel')
```



| Illustration | Opslevel |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/O/Opslevel.png) | ![illustration for Opslevel](../../simpleicons-5/O/Opslevel.Local.png) |




## Opslevel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Opslevel
include('simpleicons-5/O/Opslevel')

' renders the element
Opslevel('Opslevel', 'Opslevel', 'an optional tech label')
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

' loads the Item which embeds the element Opslevel
include('simpleicons-5/O/Opslevel')

' renders the element
Opslevel('Opslevel', 'Opslevel', 'an optional tech label')
@enduml
```

