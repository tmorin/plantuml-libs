# Libretranslate


```text
simpleicons-14/L/Libretranslate
```

```text
include('simpleicons-14/L/Libretranslate')
```



| Illustration | Libretranslate |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Libretranslate.png) | ![illustration for Libretranslate](../../simpleicons-14/L/Libretranslate.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LibretranslateXs>`
- `<$LibretranslateSm>`
- `<$LibretranslateMd>`
- `<$LibretranslateLg>`





## Libretranslate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Libretranslate
include('simpleicons-14/L/Libretranslate')

' renders the element
Libretranslate('Libretranslate', 'Libretranslate', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Libretranslate
include('simpleicons-14/L/Libretranslate')

' renders the element
Libretranslate('Libretranslate', 'Libretranslate', 'an optional tech label', 'an optional description')
@enduml
```

