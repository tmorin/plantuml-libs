# Spacemacs


```text
simpleicons-5/S/Spacemacs
```

```text
include('simpleicons-5/S/Spacemacs')
```



| Illustration | Spacemacs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Spacemacs.png) | ![illustration for Spacemacs](../../simpleicons-5/S/Spacemacs.Local.png) |




## Spacemacs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Spacemacs
include('simpleicons-5/S/Spacemacs')

' renders the element
Spacemacs('Spacemacs', 'Spacemacs', 'an optional tech label')
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

' loads the Item which embeds the element Spacemacs
include('simpleicons-5/S/Spacemacs')

' renders the element
Spacemacs('Spacemacs', 'Spacemacs', 'an optional tech label')
@enduml
```

