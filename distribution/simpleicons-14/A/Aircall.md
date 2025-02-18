# Aircall


```text
simpleicons-14/A/Aircall
```

```text
include('simpleicons-14/A/Aircall')
```



| Illustration | Aircall |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Aircall.png) | ![illustration for Aircall](../../simpleicons-14/A/Aircall.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AircallXs>`
- `<$AircallSm>`
- `<$AircallMd>`
- `<$AircallLg>`





## Aircall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Aircall
include('simpleicons-14/A/Aircall')

' renders the element
Aircall('Aircall', 'Aircall', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Aircall
include('simpleicons-14/A/Aircall')

' renders the element
Aircall('Aircall', 'Aircall', 'an optional tech label', 'an optional description')
@enduml
```

