# Lastpass


```text
simpleicons-5/L/Lastpass
```

```text
include('simpleicons-5/L/Lastpass')
```



| Illustration | Lastpass |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/L/Lastpass.png) | ![illustration for Lastpass](../../simpleicons-5/L/Lastpass.Local.png) |




## Lastpass

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Lastpass
include('simpleicons-5/L/Lastpass')

' renders the element
Lastpass('Lastpass', 'Lastpass', 'an optional tech label')
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

' loads the Item which embeds the element Lastpass
include('simpleicons-5/L/Lastpass')

' renders the element
Lastpass('Lastpass', 'Lastpass', 'an optional tech label')
@enduml
```

