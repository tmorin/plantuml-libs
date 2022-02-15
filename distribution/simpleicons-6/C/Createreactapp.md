# Createreactapp


```text
simpleicons-6/C/Createreactapp
```

```text
include('simpleicons-6/C/Createreactapp')
```



| Illustration | Createreactapp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Createreactapp.png) | ![illustration for Createreactapp](../../simpleicons-6/C/Createreactapp.Local.png) |




## Createreactapp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Createreactapp
include('simpleicons-6/C/Createreactapp')

' renders the element
Createreactapp('Createreactapp', 'Createreactapp', 'an optional tech label')
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

' loads the Item which embeds the element Createreactapp
include('simpleicons-6/C/Createreactapp')

' renders the element
Createreactapp('Createreactapp', 'Createreactapp', 'an optional tech label')
@enduml
```

