# Lapce


```text
simpleicons/L/Lapce
```

```text
include('simpleicons/L/Lapce')
```



| Illustration | Lapce |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Lapce.png) | ![illustration for Lapce](../../simpleicons/L/Lapce.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LapceXs>`
- `<$LapceSm>`
- `<$LapceMd>`
- `<$LapceLg>`





## Lapce

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Lapce
include('simpleicons/L/Lapce')

' renders the element
Lapce('Lapce', 'Lapce', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lapce
include('simpleicons/L/Lapce')

' renders the element
Lapce('Lapce', 'Lapce', 'an optional tech label', 'an optional description')
@enduml
```

