# Editorconfig


```text
simpleicons-8/E/Editorconfig
```

```text
include('simpleicons-8/E/Editorconfig')
```



| Illustration | Editorconfig |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/E/Editorconfig.png) | ![illustration for Editorconfig](../../simpleicons-8/E/Editorconfig.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EditorconfigXs>`
- `<$EditorconfigSm>`
- `<$EditorconfigMd>`
- `<$EditorconfigLg>`





## Editorconfig

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Editorconfig
include('simpleicons-8/E/Editorconfig')

' renders the element
Editorconfig('Editorconfig', 'Editorconfig', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Editorconfig
include('simpleicons-8/E/Editorconfig')

' renders the element
Editorconfig('Editorconfig', 'Editorconfig', 'an optional tech label', 'an optional description')
@enduml
```

