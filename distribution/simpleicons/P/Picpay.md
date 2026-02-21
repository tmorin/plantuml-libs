# Picpay


```text
simpleicons/P/Picpay
```

```text
include('simpleicons/P/Picpay')
```



| Illustration | Picpay |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Picpay.png) | ![illustration for Picpay](../../simpleicons/P/Picpay.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PicpayXs>`
- `<$PicpaySm>`
- `<$PicpayMd>`
- `<$PicpayLg>`





## Picpay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Picpay
include('simpleicons/P/Picpay')

' renders the element
Picpay('Picpay', 'Picpay', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Picpay
include('simpleicons/P/Picpay')

' renders the element
Picpay('Picpay', 'Picpay', 'an optional tech label', 'an optional description')
@enduml
```

