# DisabledByDefault


```text
material/Action/DisabledByDefault
```

```text
include('material/Action/DisabledByDefault')
```



| Illustration | DisabledByDefault |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/DisabledByDefault.png) | ![illustration for DisabledByDefault](../../material/Action/DisabledByDefault.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DisabledByDefaultXs>`
- `<$DisabledByDefaultSm>`
- `<$DisabledByDefaultMd>`
- `<$DisabledByDefaultLg>`





## DisabledByDefault

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element DisabledByDefault
include('material/Action/DisabledByDefault')

' renders the element
DisabledByDefault('DisabledByDefault', 'Disabled By Default', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DisabledByDefault
include('material/Action/DisabledByDefault')

' renders the element
DisabledByDefault('DisabledByDefault', 'Disabled By Default', 'an optional tech label', 'an optional description')
@enduml
```

