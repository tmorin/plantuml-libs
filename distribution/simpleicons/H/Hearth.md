# Hearth


```text
simpleicons/H/Hearth
```

```text
include('simpleicons/H/Hearth')
```



| Illustration | Hearth |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Hearth.png) | ![illustration for Hearth](../../simpleicons/H/Hearth.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HearthXs>`
- `<$HearthSm>`
- `<$HearthMd>`
- `<$HearthLg>`





## Hearth

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Hearth
include('simpleicons/H/Hearth')

' renders the element
Hearth('Hearth', 'Hearth', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hearth
include('simpleicons/H/Hearth')

' renders the element
Hearth('Hearth', 'Hearth', 'an optional tech label', 'an optional description')
@enduml
```

