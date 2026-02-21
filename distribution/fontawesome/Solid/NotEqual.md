# NotEqual


```text
fontawesome/Solid/NotEqual
```

```text
include('fontawesome/Solid/NotEqual')
```



| Illustration | NotEqual |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/NotEqual.png) | ![illustration for NotEqual](../../fontawesome/Solid/NotEqual.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NotEqualXs>`
- `<$NotEqualSm>`
- `<$NotEqualMd>`
- `<$NotEqualLg>`





## NotEqual

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element NotEqual
include('fontawesome/Solid/NotEqual')

' renders the element
NotEqual('NotEqual', 'Not Equal', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element NotEqual
include('fontawesome/Solid/NotEqual')

' renders the element
NotEqual('NotEqual', 'Not Equal', 'an optional tech label', 'an optional description')
@enduml
```

