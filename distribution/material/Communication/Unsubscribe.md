# Unsubscribe


```text
material/Communication/Unsubscribe
```

```text
include('material/Communication/Unsubscribe')
```



| Illustration | Unsubscribe |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/Unsubscribe.png) | ![illustration for Unsubscribe](../../material/Communication/Unsubscribe.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UnsubscribeXs>`
- `<$UnsubscribeSm>`
- `<$UnsubscribeMd>`
- `<$UnsubscribeLg>`





## Unsubscribe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Unsubscribe
include('material/Communication/Unsubscribe')

' renders the element
Unsubscribe('Unsubscribe', 'Unsubscribe', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Unsubscribe
include('material/Communication/Unsubscribe')

' renders the element
Unsubscribe('Unsubscribe', 'Unsubscribe', 'an optional tech label', 'an optional description')
@enduml
```

