# Lapce


```text
simpleicons-14/L/Lapce
```

```text
include('simpleicons-14/L/Lapce')
```



| Illustration | Lapce |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Lapce.png) | ![illustration for Lapce](../../simpleicons-14/L/Lapce.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Lapce
include('simpleicons-14/L/Lapce')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Lapce
include('simpleicons-14/L/Lapce')

' renders the element
Lapce('Lapce', 'Lapce', 'an optional tech label', 'an optional description')
@enduml
```

