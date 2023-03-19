# StackExchange


```text
fontawesome-6/Brands/StackExchange
```

```text
include('fontawesome-6/Brands/StackExchange')
```



| Illustration | StackExchange |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/StackExchange.png) | ![illustration for StackExchange](../../fontawesome-6/Brands/StackExchange.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StackExchangeXs>`
- `<$StackExchangeSm>`
- `<$StackExchangeMd>`
- `<$StackExchangeLg>`





## StackExchange

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element StackExchange
include('fontawesome-6/Brands/StackExchange')

' renders the element
StackExchange('StackExchange', 'Stack Exchange', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element StackExchange
include('fontawesome-6/Brands/StackExchange')

' renders the element
StackExchange('StackExchange', 'Stack Exchange', 'an optional tech label', 'an optional description')
@enduml
```

