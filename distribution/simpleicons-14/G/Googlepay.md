# Googlepay


```text
simpleicons-14/G/Googlepay
```

```text
include('simpleicons-14/G/Googlepay')
```



| Illustration | Googlepay |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Googlepay.png) | ![illustration for Googlepay](../../simpleicons-14/G/Googlepay.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GooglepayXs>`
- `<$GooglepaySm>`
- `<$GooglepayMd>`
- `<$GooglepayLg>`





## Googlepay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Googlepay
include('simpleicons-14/G/Googlepay')

' renders the element
Googlepay('Googlepay', 'Googlepay', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googlepay
include('simpleicons-14/G/Googlepay')

' renders the element
Googlepay('Googlepay', 'Googlepay', 'an optional tech label', 'an optional description')
@enduml
```

