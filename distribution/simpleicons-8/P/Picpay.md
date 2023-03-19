# Picpay


```text
simpleicons-8/P/Picpay
```

```text
include('simpleicons-8/P/Picpay')
```



| Illustration | Picpay |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Picpay.png) | ![illustration for Picpay](../../simpleicons-8/P/Picpay.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Picpay
include('simpleicons-8/P/Picpay')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Picpay
include('simpleicons-8/P/Picpay')

' renders the element
Picpay('Picpay', 'Picpay', 'an optional tech label', 'an optional description')
@enduml
```

