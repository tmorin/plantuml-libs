# Payhip


```text
simpleicons-14/P/Payhip
```

```text
include('simpleicons-14/P/Payhip')
```



| Illustration | Payhip |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Payhip.png) | ![illustration for Payhip](../../simpleicons-14/P/Payhip.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Payhip
include('simpleicons-14/P/Payhip')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Payhip
include('simpleicons-14/P/Payhip')

' renders the element
Payhip('Payhip', 'Payhip', 'an optional tech label', 'an optional description')
@enduml
```

