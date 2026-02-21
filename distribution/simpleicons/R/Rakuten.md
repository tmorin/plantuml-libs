# Rakuten


```text
simpleicons/R/Rakuten
```

```text
include('simpleicons/R/Rakuten')
```



| Illustration | Rakuten |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Rakuten.png) | ![illustration for Rakuten](../../simpleicons/R/Rakuten.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RakutenXs>`
- `<$RakutenSm>`
- `<$RakutenMd>`
- `<$RakutenLg>`





## Rakuten

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Rakuten
include('simpleicons/R/Rakuten')

' renders the element
Rakuten('Rakuten', 'Rakuten', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rakuten
include('simpleicons/R/Rakuten')

' renders the element
Rakuten('Rakuten', 'Rakuten', 'an optional tech label', 'an optional description')
@enduml
```

