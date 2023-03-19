# PhoneForwarded


```text
material-4/Notification/PhoneForwarded
```

```text
include('material-4/Notification/PhoneForwarded')
```



| Illustration | PhoneForwarded |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/PhoneForwarded.png) | ![illustration for PhoneForwarded](../../material-4/Notification/PhoneForwarded.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhoneForwardedXs>`
- `<$PhoneForwardedSm>`
- `<$PhoneForwardedMd>`
- `<$PhoneForwardedLg>`





## PhoneForwarded

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PhoneForwarded
include('material-4/Notification/PhoneForwarded')

' renders the element
PhoneForwarded('PhoneForwarded', 'Phone Forwarded', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PhoneForwarded
include('material-4/Notification/PhoneForwarded')

' renders the element
PhoneForwarded('PhoneForwarded', 'Phone Forwarded', 'an optional tech label', 'an optional description')
@enduml
```

