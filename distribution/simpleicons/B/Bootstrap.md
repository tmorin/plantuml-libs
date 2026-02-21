# Bootstrap


```text
simpleicons/B/Bootstrap
```

```text
include('simpleicons/B/Bootstrap')
```



| Illustration | Bootstrap |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Bootstrap.png) | ![illustration for Bootstrap](../../simpleicons/B/Bootstrap.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BootstrapXs>`
- `<$BootstrapSm>`
- `<$BootstrapMd>`
- `<$BootstrapLg>`





## Bootstrap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Bootstrap
include('simpleicons/B/Bootstrap')

' renders the element
Bootstrap('Bootstrap', 'Bootstrap', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bootstrap
include('simpleicons/B/Bootstrap')

' renders the element
Bootstrap('Bootstrap', 'Bootstrap', 'an optional tech label', 'an optional description')
@enduml
```

