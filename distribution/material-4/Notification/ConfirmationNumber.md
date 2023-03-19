# ConfirmationNumber


```text
material-4/Notification/ConfirmationNumber
```

```text
include('material-4/Notification/ConfirmationNumber')
```



| Illustration | ConfirmationNumber |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/ConfirmationNumber.png) | ![illustration for ConfirmationNumber](../../material-4/Notification/ConfirmationNumber.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ConfirmationNumberXs>`
- `<$ConfirmationNumberSm>`
- `<$ConfirmationNumberMd>`
- `<$ConfirmationNumberLg>`





## ConfirmationNumber

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ConfirmationNumber
include('material-4/Notification/ConfirmationNumber')

' renders the element
ConfirmationNumber('ConfirmationNumber', 'Confirmation Number', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ConfirmationNumber
include('material-4/Notification/ConfirmationNumber')

' renders the element
ConfirmationNumber('ConfirmationNumber', 'Confirmation Number', 'an optional tech label', 'an optional description')
@enduml
```

