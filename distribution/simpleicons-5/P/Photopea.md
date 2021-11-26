# Photopea


```text
simpleicons-5/P/Photopea
```

```text
include('simpleicons-5/P/Photopea')
```



| Illustration | Photopea |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/P/Photopea.png) | ![illustration for Photopea](../../simpleicons-5/P/Photopea.Local.png) |




## Photopea

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Photopea
include('simpleicons-5/P/Photopea')

' renders the element
Photopea('Photopea', 'Photopea', 'an optional tech label')
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

' loads the Item which embeds the element Photopea
include('simpleicons-5/P/Photopea')

' renders the element
Photopea('Photopea', 'Photopea', 'an optional tech label')
@enduml
```

