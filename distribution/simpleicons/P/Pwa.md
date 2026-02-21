# Pwa


```text
simpleicons/P/Pwa
```

```text
include('simpleicons/P/Pwa')
```



| Illustration | Pwa |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Pwa.png) | ![illustration for Pwa](../../simpleicons/P/Pwa.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PwaXs>`
- `<$PwaSm>`
- `<$PwaMd>`
- `<$PwaLg>`





## Pwa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Pwa
include('simpleicons/P/Pwa')

' renders the element
Pwa('Pwa', 'Pwa', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pwa
include('simpleicons/P/Pwa')

' renders the element
Pwa('Pwa', 'Pwa', 'an optional tech label', 'an optional description')
@enduml
```

