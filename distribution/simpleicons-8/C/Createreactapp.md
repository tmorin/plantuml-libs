# Createreactapp


```text
simpleicons-8/C/Createreactapp
```

```text
include('simpleicons-8/C/Createreactapp')
```



| Illustration | Createreactapp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Createreactapp.png) | ![illustration for Createreactapp](../../simpleicons-8/C/Createreactapp.Local.png) |




## Createreactapp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Createreactapp
include('simpleicons-8/C/Createreactapp')

' renders the element
Createreactapp('Createreactapp', 'Createreactapp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Createreactapp
include('simpleicons-8/C/Createreactapp')

' renders the element
Createreactapp('Createreactapp', 'Createreactapp', 'an optional tech label', 'an optional description')
@enduml
```

