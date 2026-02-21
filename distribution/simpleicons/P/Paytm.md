# Paytm


```text
simpleicons/P/Paytm
```

```text
include('simpleicons/P/Paytm')
```



| Illustration | Paytm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Paytm.png) | ![illustration for Paytm](../../simpleicons/P/Paytm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PaytmXs>`
- `<$PaytmSm>`
- `<$PaytmMd>`
- `<$PaytmLg>`





## Paytm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Paytm
include('simpleicons/P/Paytm')

' renders the element
Paytm('Paytm', 'Paytm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Paytm
include('simpleicons/P/Paytm')

' renders the element
Paytm('Paytm', 'Paytm', 'an optional tech label', 'an optional description')
@enduml
```

