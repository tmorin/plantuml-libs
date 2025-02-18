# Hackerearth


```text
simpleicons-14/H/Hackerearth
```

```text
include('simpleicons-14/H/Hackerearth')
```



| Illustration | Hackerearth |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Hackerearth.png) | ![illustration for Hackerearth](../../simpleicons-14/H/Hackerearth.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HackerearthXs>`
- `<$HackerearthSm>`
- `<$HackerearthMd>`
- `<$HackerearthLg>`





## Hackerearth

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Hackerearth
include('simpleicons-14/H/Hackerearth')

' renders the element
Hackerearth('Hackerearth', 'Hackerearth', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hackerearth
include('simpleicons-14/H/Hackerearth')

' renders the element
Hackerearth('Hackerearth', 'Hackerearth', 'an optional tech label', 'an optional description')
@enduml
```

