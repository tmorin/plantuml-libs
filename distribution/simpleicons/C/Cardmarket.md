# Cardmarket


```text
simpleicons/C/Cardmarket
```

```text
include('simpleicons/C/Cardmarket')
```



| Illustration | Cardmarket |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Cardmarket.png) | ![illustration for Cardmarket](../../simpleicons/C/Cardmarket.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CardmarketXs>`
- `<$CardmarketSm>`
- `<$CardmarketMd>`
- `<$CardmarketLg>`





## Cardmarket

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cardmarket
include('simpleicons/C/Cardmarket')

' renders the element
Cardmarket('Cardmarket', 'Cardmarket', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cardmarket
include('simpleicons/C/Cardmarket')

' renders the element
Cardmarket('Cardmarket', 'Cardmarket', 'an optional tech label', 'an optional description')
@enduml
```

