# Zcool


```text
simpleicons-14/Z/Zcool
```

```text
include('simpleicons-14/Z/Zcool')
```



| Illustration | Zcool |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Z/Zcool.png) | ![illustration for Zcool](../../simpleicons-14/Z/Zcool.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZcoolXs>`
- `<$ZcoolSm>`
- `<$ZcoolMd>`
- `<$ZcoolLg>`





## Zcool

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Zcool
include('simpleicons-14/Z/Zcool')

' renders the element
Zcool('Zcool', 'Zcool', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zcool
include('simpleicons-14/Z/Zcool')

' renders the element
Zcool('Zcool', 'Zcool', 'an optional tech label', 'an optional description')
@enduml
```

