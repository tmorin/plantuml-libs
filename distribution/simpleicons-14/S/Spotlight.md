# Spotlight


```text
simpleicons-14/S/Spotlight
```

```text
include('simpleicons-14/S/Spotlight')
```



| Illustration | Spotlight |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Spotlight.png) | ![illustration for Spotlight](../../simpleicons-14/S/Spotlight.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SpotlightXs>`
- `<$SpotlightSm>`
- `<$SpotlightMd>`
- `<$SpotlightLg>`





## Spotlight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Spotlight
include('simpleicons-14/S/Spotlight')

' renders the element
Spotlight('Spotlight', 'Spotlight', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Spotlight
include('simpleicons-14/S/Spotlight')

' renders the element
Spotlight('Spotlight', 'Spotlight', 'an optional tech label', 'an optional description')
@enduml
```

