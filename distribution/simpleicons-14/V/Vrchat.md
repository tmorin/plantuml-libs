# Vrchat


```text
simpleicons-14/V/Vrchat
```

```text
include('simpleicons-14/V/Vrchat')
```



| Illustration | Vrchat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/V/Vrchat.png) | ![illustration for Vrchat](../../simpleicons-14/V/Vrchat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VrchatXs>`
- `<$VrchatSm>`
- `<$VrchatMd>`
- `<$VrchatLg>`





## Vrchat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Vrchat
include('simpleicons-14/V/Vrchat')

' renders the element
Vrchat('Vrchat', 'Vrchat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vrchat
include('simpleicons-14/V/Vrchat')

' renders the element
Vrchat('Vrchat', 'Vrchat', 'an optional tech label', 'an optional description')
@enduml
```

