# Alipay


```text
fontawesome-6/Brands/Alipay
```

```text
include('fontawesome-6/Brands/Alipay')
```



| Illustration | Alipay |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Alipay.png) | ![illustration for Alipay](../../fontawesome-6/Brands/Alipay.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AlipayXs>`
- `<$AlipaySm>`
- `<$AlipayMd>`
- `<$AlipayLg>`





## Alipay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Alipay
include('fontawesome-6/Brands/Alipay')

' renders the element
Alipay('Alipay', 'Alipay', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Alipay
include('fontawesome-6/Brands/Alipay')

' renders the element
Alipay('Alipay', 'Alipay', 'an optional tech label', 'an optional description')
@enduml
```

