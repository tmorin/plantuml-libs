# Cloudron


```text
simpleicons-14/C/Cloudron
```

```text
include('simpleicons-14/C/Cloudron')
```



| Illustration | Cloudron |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Cloudron.png) | ![illustration for Cloudron](../../simpleicons-14/C/Cloudron.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cloudron
include('simpleicons-14/C/Cloudron')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cloudron
include('simpleicons-14/C/Cloudron')

' renders the element
Cloudron('Cloudron', 'Cloudron', 'an optional tech label', 'an optional description')
@enduml
```

