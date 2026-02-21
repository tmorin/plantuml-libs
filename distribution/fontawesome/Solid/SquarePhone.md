# SquarePhone


```text
fontawesome/Solid/SquarePhone
```

```text
include('fontawesome/Solid/SquarePhone')
```



| Illustration | SquarePhone |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SquarePhone.png) | ![illustration for SquarePhone](../../fontawesome/Solid/SquarePhone.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquarePhoneXs>`
- `<$SquarePhoneSm>`
- `<$SquarePhoneMd>`
- `<$SquarePhoneLg>`





## SquarePhone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquarePhone
include('fontawesome/Solid/SquarePhone')

' renders the element
SquarePhone('SquarePhone', 'Square Phone', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquarePhone
include('fontawesome/Solid/SquarePhone')

' renders the element
SquarePhone('SquarePhone', 'Square Phone', 'an optional tech label', 'an optional description')
@enduml
```

