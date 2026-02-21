# Webmoney


```text
simpleicons/W/Webmoney
```

```text
include('simpleicons/W/Webmoney')
```



| Illustration | Webmoney |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Webmoney.png) | ![illustration for Webmoney](../../simpleicons/W/Webmoney.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WebmoneyXs>`
- `<$WebmoneySm>`
- `<$WebmoneyMd>`
- `<$WebmoneyLg>`





## Webmoney

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Webmoney
include('simpleicons/W/Webmoney')

' renders the element
Webmoney('Webmoney', 'Webmoney', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Webmoney
include('simpleicons/W/Webmoney')

' renders the element
Webmoney('Webmoney', 'Webmoney', 'an optional tech label', 'an optional description')
@enduml
```

