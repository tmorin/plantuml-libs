# Barclays


```text
simpleicons/B/Barclays
```

```text
include('simpleicons/B/Barclays')
```



| Illustration | Barclays |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Barclays.png) | ![illustration for Barclays](../../simpleicons/B/Barclays.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BarclaysXs>`
- `<$BarclaysSm>`
- `<$BarclaysMd>`
- `<$BarclaysLg>`





## Barclays

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Barclays
include('simpleicons/B/Barclays')

' renders the element
Barclays('Barclays', 'Barclays', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Barclays
include('simpleicons/B/Barclays')

' renders the element
Barclays('Barclays', 'Barclays', 'an optional tech label', 'an optional description')
@enduml
```

