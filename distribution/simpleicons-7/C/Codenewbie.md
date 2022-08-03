# Codenewbie


```text
simpleicons-7/C/Codenewbie
```

```text
include('simpleicons-7/C/Codenewbie')
```



| Illustration | Codenewbie |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Codenewbie.png) | ![illustration for Codenewbie](../../simpleicons-7/C/Codenewbie.Local.png) |




## Codenewbie

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Codenewbie
include('simpleicons-7/C/Codenewbie')

' renders the element
Codenewbie('Codenewbie', 'Codenewbie', 'an optional tech label')
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

' loads the Item which embeds the element Codenewbie
include('simpleicons-7/C/Codenewbie')

' renders the element
Codenewbie('Codenewbie', 'Codenewbie', 'an optional tech label')
@enduml
```
