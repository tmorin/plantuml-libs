# SwitchAccount


```text
material/Social/SwitchAccount
```

```text
include('material/Social/SwitchAccount')
```



| Illustration | SwitchAccount |
| :---: | :---: |
| ![illustration for Illustration](../../material/Social/SwitchAccount.png) | ![illustration for SwitchAccount](../../material/Social/SwitchAccount.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SwitchAccountXs>`
- `<$SwitchAccountSm>`
- `<$SwitchAccountMd>`
- `<$SwitchAccountLg>`





## SwitchAccount

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SwitchAccount
include('material/Social/SwitchAccount')

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
include('material/bootstrap')

' loads the Item which embeds the element SwitchAccount
include('material/Social/SwitchAccount')

' renders the element
SwitchAccount('SwitchAccount', 'Switch Account', 'an optional tech label', 'an optional description')
@enduml
```

