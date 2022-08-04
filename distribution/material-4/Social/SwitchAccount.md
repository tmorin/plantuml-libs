# SwitchAccount


```text
material-4/Social/SwitchAccount
```

```text
include('material-4/Social/SwitchAccount')
```



| Illustration | SwitchAccount |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/SwitchAccount.png) | ![illustration for SwitchAccount](../../material-4/Social/SwitchAccount.Local.png) |




## SwitchAccount

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SwitchAccount
include('material-4/Social/SwitchAccount')

' renders the element
SwitchAccount('SwitchAccount', 'Switch Account', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element SwitchAccount
include('material-4/Social/SwitchAccount')

' renders the element
SwitchAccount('SwitchAccount', 'Switch Account', 'an optional tech label', 'an optional description')
@enduml
```

