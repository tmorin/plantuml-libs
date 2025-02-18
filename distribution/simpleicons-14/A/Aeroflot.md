# Aeroflot


```text
simpleicons-14/A/Aeroflot
```

```text
include('simpleicons-14/A/Aeroflot')
```



| Illustration | Aeroflot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Aeroflot.png) | ![illustration for Aeroflot](../../simpleicons-14/A/Aeroflot.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AeroflotXs>`
- `<$AeroflotSm>`
- `<$AeroflotMd>`
- `<$AeroflotLg>`





## Aeroflot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Aeroflot
include('simpleicons-14/A/Aeroflot')

' renders the element
Aeroflot('Aeroflot', 'Aeroflot', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Aeroflot
include('simpleicons-14/A/Aeroflot')

' renders the element
Aeroflot('Aeroflot', 'Aeroflot', 'an optional tech label', 'an optional description')
@enduml
```

