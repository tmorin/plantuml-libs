# Openaccess


```text
simpleicons/O/Openaccess
```

```text
include('simpleicons/O/Openaccess')
```



| Illustration | Openaccess |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Openaccess.png) | ![illustration for Openaccess](../../simpleicons/O/Openaccess.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpenaccessXs>`
- `<$OpenaccessSm>`
- `<$OpenaccessMd>`
- `<$OpenaccessLg>`





## Openaccess

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Openaccess
include('simpleicons/O/Openaccess')

' renders the element
Openaccess('Openaccess', 'Openaccess', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Openaccess
include('simpleicons/O/Openaccess')

' renders the element
Openaccess('Openaccess', 'Openaccess', 'an optional tech label', 'an optional description')
@enduml
```

