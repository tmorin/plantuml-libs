# Homebrew


```text
simpleicons-5/H/Homebrew
```

```text
include('simpleicons-5/H/Homebrew')
```



| Illustration | Homebrew |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Homebrew.png) | ![illustration for Homebrew](../../simpleicons-5/H/Homebrew.Local.png) |




## Homebrew

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Homebrew
include('simpleicons-5/H/Homebrew')

' renders the element
Homebrew('Homebrew', 'Homebrew', 'an optional tech label')
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

' loads the Item which embeds the element Homebrew
include('simpleicons-5/H/Homebrew')

' renders the element
Homebrew('Homebrew', 'Homebrew', 'an optional tech label')
@enduml
```

