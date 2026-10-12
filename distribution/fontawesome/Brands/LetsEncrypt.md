# LetsEncrypt


```text
fontawesome/Brands/LetsEncrypt
```

```text
include('fontawesome/Brands/LetsEncrypt')
```



| Illustration | LetsEncrypt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/LetsEncrypt.png) | ![illustration for LetsEncrypt](../../fontawesome/Brands/LetsEncrypt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LetsEncryptXs>`
- `<$LetsEncryptSm>`
- `<$LetsEncryptMd>`
- `<$LetsEncryptLg>`





## LetsEncrypt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LetsEncrypt
include('fontawesome/Brands/LetsEncrypt')

' renders the element
LetsEncrypt('LetsEncrypt', 'Lets Encrypt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LetsEncrypt
include('fontawesome/Brands/LetsEncrypt')

' renders the element
LetsEncrypt('LetsEncrypt', 'Lets Encrypt', 'an optional tech label', 'an optional description')
@enduml
```

