# Codenewbie


```text
simpleicons/C/Codenewbie
```

```text
include('simpleicons/C/Codenewbie')
```



| Illustration | Codenewbie |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Codenewbie.png) | ![illustration for Codenewbie](../../simpleicons/C/Codenewbie.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CodenewbieXs>`
- `<$CodenewbieSm>`
- `<$CodenewbieMd>`
- `<$CodenewbieLg>`





## Codenewbie

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Codenewbie
include('simpleicons/C/Codenewbie')

' renders the element
Codenewbie('Codenewbie', 'Codenewbie', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Codenewbie
include('simpleicons/C/Codenewbie')

' renders the element
Codenewbie('Codenewbie', 'Codenewbie', 'an optional tech label', 'an optional description')
@enduml
```

