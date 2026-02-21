# Btc


```text
fontawesome/Brands/Btc
```

```text
include('fontawesome/Brands/Btc')
```



| Illustration | Btc |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Btc.png) | ![illustration for Btc](../../fontawesome/Brands/Btc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BtcXs>`
- `<$BtcSm>`
- `<$BtcMd>`
- `<$BtcLg>`





## Btc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Btc
include('fontawesome/Brands/Btc')

' renders the element
Btc('Btc', 'Btc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Btc
include('fontawesome/Brands/Btc')

' renders the element
Btc('Btc', 'Btc', 'an optional tech label', 'an optional description')
@enduml
```

