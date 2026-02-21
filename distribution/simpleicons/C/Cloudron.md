# Cloudron


```text
simpleicons/C/Cloudron
```

```text
include('simpleicons/C/Cloudron')
```



| Illustration | Cloudron |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Cloudron.png) | ![illustration for Cloudron](../../simpleicons/C/Cloudron.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudronXs>`
- `<$CloudronSm>`
- `<$CloudronMd>`
- `<$CloudronLg>`





## Cloudron

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cloudron
include('simpleicons/C/Cloudron')

' renders the element
Cloudron('Cloudron', 'Cloudron', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cloudron
include('simpleicons/C/Cloudron')

' renders the element
Cloudron('Cloudron', 'Cloudron', 'an optional tech label', 'an optional description')
@enduml
```

