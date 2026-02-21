# Fampay


```text
simpleicons/F/Fampay
```

```text
include('simpleicons/F/Fampay')
```



| Illustration | Fampay |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Fampay.png) | ![illustration for Fampay](../../simpleicons/F/Fampay.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FampayXs>`
- `<$FampaySm>`
- `<$FampayMd>`
- `<$FampayLg>`





## Fampay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Fampay
include('simpleicons/F/Fampay')

' renders the element
Fampay('Fampay', 'Fampay', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fampay
include('simpleicons/F/Fampay')

' renders the element
Fampay('Fampay', 'Fampay', 'an optional tech label', 'an optional description')
@enduml
```

