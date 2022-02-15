# Godaddy


```text
simpleicons-6/G/Godaddy
```

```text
include('simpleicons-6/G/Godaddy')
```



| Illustration | Godaddy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Godaddy.png) | ![illustration for Godaddy](../../simpleicons-6/G/Godaddy.Local.png) |




## Godaddy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Godaddy
include('simpleicons-6/G/Godaddy')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Godaddy
include('simpleicons-6/G/Godaddy')

' renders the element
Godaddy('Godaddy', 'Godaddy', 'an optional tech label')
@enduml
```

