# Afterpay


```text
simpleicons-14/A/Afterpay
```

```text
include('simpleicons-14/A/Afterpay')
```



| Illustration | Afterpay |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Afterpay.png) | ![illustration for Afterpay](../../simpleicons-14/A/Afterpay.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AfterpayXs>`
- `<$AfterpaySm>`
- `<$AfterpayMd>`
- `<$AfterpayLg>`





## Afterpay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Afterpay
include('simpleicons-14/A/Afterpay')

' renders the element
Afterpay('Afterpay', 'Afterpay', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Afterpay
include('simpleicons-14/A/Afterpay')

' renders the element
Afterpay('Afterpay', 'Afterpay', 'an optional tech label', 'an optional description')
@enduml
```

