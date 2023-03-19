# Vim


```text
simpleicons-8/V/Vim
```

```text
include('simpleicons-8/V/Vim')
```



| Illustration | Vim |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/V/Vim.png) | ![illustration for Vim](../../simpleicons-8/V/Vim.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VimXs>`
- `<$VimSm>`
- `<$VimMd>`
- `<$VimLg>`





## Vim

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Vim
include('simpleicons-8/V/Vim')

' renders the element
Vim('Vim', 'Vim', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vim
include('simpleicons-8/V/Vim')

' renders the element
Vim('Vim', 'Vim', 'an optional tech label', 'an optional description')
@enduml
```

