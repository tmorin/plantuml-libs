# AutoAwesome


```text
material/Image/AutoAwesome
```

```text
include('material/Image/AutoAwesome')
```



| Illustration | AutoAwesome |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/AutoAwesome.png) | ![illustration for AutoAwesome](../../material/Image/AutoAwesome.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AutoAwesomeXs>`
- `<$AutoAwesomeSm>`
- `<$AutoAwesomeMd>`
- `<$AutoAwesomeLg>`





## AutoAwesome

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AutoAwesome
include('material/Image/AutoAwesome')

' renders the element
AutoAwesome('AutoAwesome', 'Auto Awesome', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element AutoAwesome
include('material/Image/AutoAwesome')

' renders the element
AutoAwesome('AutoAwesome', 'Auto Awesome', 'an optional tech label', 'an optional description')
@enduml
```

