# Deepl


```text
simpleicons-14/D/Deepl
```

```text
include('simpleicons-14/D/Deepl')
```



| Illustration | Deepl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Deepl.png) | ![illustration for Deepl](../../simpleicons-14/D/Deepl.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DeeplXs>`
- `<$DeeplSm>`
- `<$DeeplMd>`
- `<$DeeplLg>`





## Deepl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Deepl
include('simpleicons-14/D/Deepl')

' renders the element
Deepl('Deepl', 'Deepl', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Deepl
include('simpleicons-14/D/Deepl')

' renders the element
Deepl('Deepl', 'Deepl', 'an optional tech label', 'an optional description')
@enduml
```

