# Googlefonts


```text
simpleicons-14/G/Googlefonts
```

```text
include('simpleicons-14/G/Googlefonts')
```



| Illustration | Googlefonts |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Googlefonts.png) | ![illustration for Googlefonts](../../simpleicons-14/G/Googlefonts.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GooglefontsXs>`
- `<$GooglefontsSm>`
- `<$GooglefontsMd>`
- `<$GooglefontsLg>`





## Googlefonts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Googlefonts
include('simpleicons-14/G/Googlefonts')

' renders the element
Googlefonts('Googlefonts', 'Googlefonts', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googlefonts
include('simpleicons-14/G/Googlefonts')

' renders the element
Googlefonts('Googlefonts', 'Googlefonts', 'an optional tech label', 'an optional description')
@enduml
```

