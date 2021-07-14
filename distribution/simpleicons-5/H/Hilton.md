# Hilton


```text
simpleicons-5/H/Hilton
```

```text
include('simpleicons-5/H/Hilton')
```



| Illustration | Hilton |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Hilton.png) | ![illustration for Hilton](../../simpleicons-5/H/Hilton.Local.png) |




## Hilton

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Hilton
include('simpleicons-5/H/Hilton')

' renders the element
Hilton('Hilton', 'Hilton', 'an optional tech label')
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

' loads the Item which embeds the element Hilton
include('simpleicons-5/H/Hilton')

' renders the element
Hilton('Hilton', 'Hilton', 'an optional tech label')
@enduml
```

