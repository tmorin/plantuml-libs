# Codenewbie


```text
simpleicons-5/C/Codenewbie
```

```text
include('simpleicons-5/C/Codenewbie')
```



| Illustration | Codenewbie |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Codenewbie.png) | ![illustration for Codenewbie](../../simpleicons-5/C/Codenewbie.Local.png) |




## Codenewbie

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Codenewbie
include('simpleicons-5/C/Codenewbie')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Codenewbie
include('simpleicons-5/C/Codenewbie')

' renders the element
Codenewbie('Codenewbie', 'Codenewbie', 'an optional tech label')
@enduml
```

