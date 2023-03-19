# PrivacyTip


```text
material-4/Action/PrivacyTip
```

```text
include('material-4/Action/PrivacyTip')
```



| Illustration | PrivacyTip |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/PrivacyTip.png) | ![illustration for PrivacyTip](../../material-4/Action/PrivacyTip.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PrivacyTipXs>`
- `<$PrivacyTipSm>`
- `<$PrivacyTipMd>`
- `<$PrivacyTipLg>`





## PrivacyTip

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PrivacyTip
include('material-4/Action/PrivacyTip')

' renders the element
PrivacyTip('PrivacyTip', 'Privacy Tip', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PrivacyTip
include('material-4/Action/PrivacyTip')

' renders the element
PrivacyTip('PrivacyTip', 'Privacy Tip', 'an optional tech label', 'an optional description')
@enduml
```

