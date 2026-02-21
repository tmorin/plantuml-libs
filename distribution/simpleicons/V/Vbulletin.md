# Vbulletin


```text
simpleicons/V/Vbulletin
```

```text
include('simpleicons/V/Vbulletin')
```



| Illustration | Vbulletin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Vbulletin.png) | ![illustration for Vbulletin](../../simpleicons/V/Vbulletin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VbulletinXs>`
- `<$VbulletinSm>`
- `<$VbulletinMd>`
- `<$VbulletinLg>`





## Vbulletin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Vbulletin
include('simpleicons/V/Vbulletin')

' renders the element
Vbulletin('Vbulletin', 'Vbulletin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vbulletin
include('simpleicons/V/Vbulletin')

' renders the element
Vbulletin('Vbulletin', 'Vbulletin', 'an optional tech label', 'an optional description')
@enduml
```

