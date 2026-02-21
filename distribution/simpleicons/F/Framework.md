# Framework


```text
simpleicons/F/Framework
```

```text
include('simpleicons/F/Framework')
```



| Illustration | Framework |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Framework.png) | ![illustration for Framework](../../simpleicons/F/Framework.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FrameworkXs>`
- `<$FrameworkSm>`
- `<$FrameworkMd>`
- `<$FrameworkLg>`





## Framework

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Framework
include('simpleicons/F/Framework')

' renders the element
Framework('Framework', 'Framework', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Framework
include('simpleicons/F/Framework')

' renders the element
Framework('Framework', 'Framework', 'an optional tech label', 'an optional description')
@enduml
```

