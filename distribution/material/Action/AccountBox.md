# AccountBox


```text
material/Action/AccountBox
```

```text
include('material/Action/AccountBox')
```



| Illustration | AccountBox |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/AccountBox.png) | ![illustration for AccountBox](../../material/Action/AccountBox.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AccountBoxXs>`
- `<$AccountBoxSm>`
- `<$AccountBoxMd>`
- `<$AccountBoxLg>`





## AccountBox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AccountBox
include('material/Action/AccountBox')

' renders the element
AccountBox('AccountBox', 'Account Box', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AccountBox
include('material/Action/AccountBox')

' renders the element
AccountBox('AccountBox', 'Account Box', 'an optional tech label', 'an optional description')
@enduml
```

