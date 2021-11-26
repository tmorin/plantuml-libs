# Godaddy


```text
simpleicons-5/G/Godaddy
```

```text
include('simpleicons-5/G/Godaddy')
```



| Illustration | Godaddy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Godaddy.png) | ![illustration for Godaddy](../../simpleicons-5/G/Godaddy.Local.png) |




## Godaddy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Godaddy
include('simpleicons-5/G/Godaddy')

' renders the element
Godaddy('Godaddy', 'Godaddy', 'an optional tech label')
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

' loads the Item which embeds the element Godaddy
include('simpleicons-5/G/Godaddy')

' renders the element
Godaddy('Godaddy', 'Godaddy', 'an optional tech label')
@enduml
```

