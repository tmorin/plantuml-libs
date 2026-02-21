# Trendmicro


```text
simpleicons/T/Trendmicro
```

```text
include('simpleicons/T/Trendmicro')
```



| Illustration | Trendmicro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Trendmicro.png) | ![illustration for Trendmicro](../../simpleicons/T/Trendmicro.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TrendmicroXs>`
- `<$TrendmicroSm>`
- `<$TrendmicroMd>`
- `<$TrendmicroLg>`





## Trendmicro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Trendmicro
include('simpleicons/T/Trendmicro')

' renders the element
Trendmicro('Trendmicro', 'Trendmicro', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Trendmicro
include('simpleicons/T/Trendmicro')

' renders the element
Trendmicro('Trendmicro', 'Trendmicro', 'an optional tech label', 'an optional description')
@enduml
```

