# Payhip


```text
simpleicons/P/Payhip
```

```text
include('simpleicons/P/Payhip')
```



| Illustration | Payhip |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Payhip.png) | ![illustration for Payhip](../../simpleicons/P/Payhip.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PayhipXs>`
- `<$PayhipSm>`
- `<$PayhipMd>`
- `<$PayhipLg>`





## Payhip

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Payhip
include('simpleicons/P/Payhip')

' renders the element
Payhip('Payhip', 'Payhip', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Payhip
include('simpleicons/P/Payhip')

' renders the element
Payhip('Payhip', 'Payhip', 'an optional tech label', 'an optional description')
@enduml
```

