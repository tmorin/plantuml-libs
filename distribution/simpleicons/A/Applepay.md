# Applepay


```text
simpleicons/A/Applepay
```

```text
include('simpleicons/A/Applepay')
```



| Illustration | Applepay |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Applepay.png) | ![illustration for Applepay](../../simpleicons/A/Applepay.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApplepayXs>`
- `<$ApplepaySm>`
- `<$ApplepayMd>`
- `<$ApplepayLg>`





## Applepay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Applepay
include('simpleicons/A/Applepay')

' renders the element
Applepay('Applepay', 'Applepay', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Applepay
include('simpleicons/A/Applepay')

' renders the element
Applepay('Applepay', 'Applepay', 'an optional tech label', 'an optional description')
@enduml
```

