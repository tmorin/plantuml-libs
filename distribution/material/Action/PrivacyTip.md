# PrivacyTip


```text
material/Action/PrivacyTip
```

```text
include('material/Action/PrivacyTip')
```



| Illustration | PrivacyTip |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/PrivacyTip.png) | ![illustration for PrivacyTip](../../material/Action/PrivacyTip.Local.png) |



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
include('material/bootstrap')

' loads the Item which embeds the element PrivacyTip
include('material/Action/PrivacyTip')

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
include('material/bootstrap')

' loads the Item which embeds the element PrivacyTip
include('material/Action/PrivacyTip')

' renders the element
PrivacyTip('PrivacyTip', 'Privacy Tip', 'an optional tech label', 'an optional description')
@enduml
```

