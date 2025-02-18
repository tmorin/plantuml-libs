# Mediamarkt


```text
simpleicons-14/M/Mediamarkt
```

```text
include('simpleicons-14/M/Mediamarkt')
```



| Illustration | Mediamarkt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mediamarkt.png) | ![illustration for Mediamarkt](../../simpleicons-14/M/Mediamarkt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MediamarktXs>`
- `<$MediamarktSm>`
- `<$MediamarktMd>`
- `<$MediamarktLg>`





## Mediamarkt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mediamarkt
include('simpleicons-14/M/Mediamarkt')

' renders the element
Mediamarkt('Mediamarkt', 'Mediamarkt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mediamarkt
include('simpleicons-14/M/Mediamarkt')

' renders the element
Mediamarkt('Mediamarkt', 'Mediamarkt', 'an optional tech label', 'an optional description')
@enduml
```

