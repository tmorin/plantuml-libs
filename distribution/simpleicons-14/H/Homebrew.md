# Homebrew


```text
simpleicons-14/H/Homebrew
```

```text
include('simpleicons-14/H/Homebrew')
```



| Illustration | Homebrew |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Homebrew.png) | ![illustration for Homebrew](../../simpleicons-14/H/Homebrew.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HomebrewXs>`
- `<$HomebrewSm>`
- `<$HomebrewMd>`
- `<$HomebrewLg>`





## Homebrew

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Homebrew
include('simpleicons-14/H/Homebrew')

' renders the element
Homebrew('Homebrew', 'Homebrew', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Homebrew
include('simpleicons-14/H/Homebrew')

' renders the element
Homebrew('Homebrew', 'Homebrew', 'an optional tech label', 'an optional description')
@enduml
```

