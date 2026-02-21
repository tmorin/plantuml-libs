# CcVisa


```text
fontawesome/Brands/CcVisa
```

```text
include('fontawesome/Brands/CcVisa')
```



| Illustration | CcVisa |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/CcVisa.png) | ![illustration for CcVisa](../../fontawesome/Brands/CcVisa.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CcVisaXs>`
- `<$CcVisaSm>`
- `<$CcVisaMd>`
- `<$CcVisaLg>`





## CcVisa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CcVisa
include('fontawesome/Brands/CcVisa')

' renders the element
CcVisa('CcVisa', 'Cc Visa', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CcVisa
include('fontawesome/Brands/CcVisa')

' renders the element
CcVisa('CcVisa', 'Cc Visa', 'an optional tech label', 'an optional description')
@enduml
```

