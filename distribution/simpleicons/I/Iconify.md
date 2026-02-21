# Iconify


```text
simpleicons/I/Iconify
```

```text
include('simpleicons/I/Iconify')
```



| Illustration | Iconify |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Iconify.png) | ![illustration for Iconify](../../simpleicons/I/Iconify.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IconifyXs>`
- `<$IconifySm>`
- `<$IconifyMd>`
- `<$IconifyLg>`





## Iconify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Iconify
include('simpleicons/I/Iconify')

' renders the element
Iconify('Iconify', 'Iconify', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Iconify
include('simpleicons/I/Iconify')

' renders the element
Iconify('Iconify', 'Iconify', 'an optional tech label', 'an optional description')
@enduml
```

