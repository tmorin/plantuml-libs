# Vim


```text
simpleicons-5/V/Vim
```

```text
include('simpleicons-5/V/Vim')
```



| Illustration | Vim |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/V/Vim.png) | ![illustration for Vim](../../simpleicons-5/V/Vim.Local.png) |




## Vim

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Vim
include('simpleicons-5/V/Vim')

' renders the element
Vim('Vim', 'Vim', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Vim
include('simpleicons-5/V/Vim')

' renders the element
Vim('Vim', 'Vim', 'an optional tech label')
@enduml
```

