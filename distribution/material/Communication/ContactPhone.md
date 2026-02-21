# ContactPhone


```text
material/Communication/ContactPhone
```

```text
include('material/Communication/ContactPhone')
```



| Illustration | ContactPhone |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/ContactPhone.png) | ![illustration for ContactPhone](../../material/Communication/ContactPhone.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ContactPhoneXs>`
- `<$ContactPhoneSm>`
- `<$ContactPhoneMd>`
- `<$ContactPhoneLg>`





## ContactPhone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ContactPhone
include('material/Communication/ContactPhone')

' renders the element
ContactPhone('ContactPhone', 'Contact Phone', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ContactPhone
include('material/Communication/ContactPhone')

' renders the element
ContactPhone('ContactPhone', 'Contact Phone', 'an optional tech label', 'an optional description')
@enduml
```

