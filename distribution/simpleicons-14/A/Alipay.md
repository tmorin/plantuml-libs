# Alipay


```text
simpleicons-14/A/Alipay
```

```text
include('simpleicons-14/A/Alipay')
```



| Illustration | Alipay |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Alipay.png) | ![illustration for Alipay](../../simpleicons-14/A/Alipay.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Alipay
include('simpleicons-14/A/Alipay')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Alipay
include('simpleicons-14/A/Alipay')

' renders the element
Alipay('Alipay', 'Alipay', 'an optional tech label', 'an optional description')
@enduml
```

