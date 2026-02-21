# Servbay


```text
simpleicons/S/Servbay
```

```text
include('simpleicons/S/Servbay')
```



| Illustration | Servbay |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Servbay.png) | ![illustration for Servbay](../../simpleicons/S/Servbay.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServbayXs>`
- `<$ServbaySm>`
- `<$ServbayMd>`
- `<$ServbayLg>`





## Servbay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Servbay
include('simpleicons/S/Servbay')

' renders the element
Servbay('Servbay', 'Servbay', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Servbay
include('simpleicons/S/Servbay')

' renders the element
Servbay('Servbay', 'Servbay', 'an optional tech label', 'an optional description')
@enduml
```

