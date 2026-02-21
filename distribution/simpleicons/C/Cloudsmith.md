# Cloudsmith


```text
simpleicons/C/Cloudsmith
```

```text
include('simpleicons/C/Cloudsmith')
```



| Illustration | Cloudsmith |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Cloudsmith.png) | ![illustration for Cloudsmith](../../simpleicons/C/Cloudsmith.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudsmithXs>`
- `<$CloudsmithSm>`
- `<$CloudsmithMd>`
- `<$CloudsmithLg>`





## Cloudsmith

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cloudsmith
include('simpleicons/C/Cloudsmith')

' renders the element
Cloudsmith('Cloudsmith', 'Cloudsmith', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cloudsmith
include('simpleicons/C/Cloudsmith')

' renders the element
Cloudsmith('Cloudsmith', 'Cloudsmith', 'an optional tech label', 'an optional description')
@enduml
```

