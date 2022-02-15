# Homebrew


```text
simpleicons-6/H/Homebrew
```

```text
include('simpleicons-6/H/Homebrew')
```



| Illustration | Homebrew |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/H/Homebrew.png) | ![illustration for Homebrew](../../simpleicons-6/H/Homebrew.Local.png) |




## Homebrew

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Homebrew
include('simpleicons-6/H/Homebrew')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Homebrew
include('simpleicons-6/H/Homebrew')

' renders the element
Homebrew('Homebrew', 'Homebrew', 'an optional tech label')
@enduml
```

