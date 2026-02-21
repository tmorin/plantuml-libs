# CcMastercard


```text
fontawesome/Brands/CcMastercard
```

```text
include('fontawesome/Brands/CcMastercard')
```



| Illustration | CcMastercard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/CcMastercard.png) | ![illustration for CcMastercard](../../fontawesome/Brands/CcMastercard.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CcMastercardXs>`
- `<$CcMastercardSm>`
- `<$CcMastercardMd>`
- `<$CcMastercardLg>`





## CcMastercard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CcMastercard
include('fontawesome/Brands/CcMastercard')

' renders the element
CcMastercard('CcMastercard', 'Cc Mastercard', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CcMastercard
include('fontawesome/Brands/CcMastercard')

' renders the element
CcMastercard('CcMastercard', 'Cc Mastercard', 'an optional tech label', 'an optional description')
@enduml
```

