# CancelScheduleSend


```text
material/Action/CancelScheduleSend
```

```text
include('material/Action/CancelScheduleSend')
```



| Illustration | CancelScheduleSend |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/CancelScheduleSend.png) | ![illustration for CancelScheduleSend](../../material/Action/CancelScheduleSend.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CancelScheduleSendXs>`
- `<$CancelScheduleSendSm>`
- `<$CancelScheduleSendMd>`
- `<$CancelScheduleSendLg>`





## CancelScheduleSend

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element CancelScheduleSend
include('material/Action/CancelScheduleSend')

' renders the element
CancelScheduleSend('CancelScheduleSend', 'Cancel Schedule Send', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CancelScheduleSend
include('material/Action/CancelScheduleSend')

' renders the element
CancelScheduleSend('CancelScheduleSend', 'Cancel Schedule Send', 'an optional tech label', 'an optional description')
@enduml
```

