# Bootstrap


```text
simpleicons-8/B/Bootstrap
```

```text
include('simpleicons-8/B/Bootstrap')
```



| Illustration | Bootstrap |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/B/Bootstrap.png) | ![illustration for Bootstrap](../../simpleicons-8/B/Bootstrap.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Bootstrap
include('simpleicons-8/B/Bootstrap')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Bootstrap
include('simpleicons-8/B/Bootstrap')

' renders the element
Bootstrap('Bootstrap', 'Bootstrap', 'an optional tech label', 'an optional description')
@enduml
```

