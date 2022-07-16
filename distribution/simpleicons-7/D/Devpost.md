# Devpost


```text
simpleicons-7/D/Devpost
```

```text
include('simpleicons-7/D/Devpost')
```



| Illustration | Devpost |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/D/Devpost.png) | ![illustration for Devpost](../../simpleicons-7/D/Devpost.Local.png) |




## Devpost

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Devpost
include('simpleicons-7/D/Devpost')

' renders the element
Devpost('Devpost', 'Devpost', 'an optional tech label')
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

' loads the Item which embeds the element Devpost
include('simpleicons-7/D/Devpost')

' renders the element
Devpost('Devpost', 'Devpost', 'an optional tech label')
@enduml
```

