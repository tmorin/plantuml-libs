# Rubygems


```text
simpleicons/R/Rubygems
```

```text
include('simpleicons/R/Rubygems')
```



| Illustration | Rubygems |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Rubygems.png) | ![illustration for Rubygems](../../simpleicons/R/Rubygems.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RubygemsXs>`
- `<$RubygemsSm>`
- `<$RubygemsMd>`
- `<$RubygemsLg>`





## Rubygems

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Rubygems
include('simpleicons/R/Rubygems')

' renders the element
Rubygems('Rubygems', 'Rubygems', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Rubygems
include('simpleicons/R/Rubygems')

' renders the element
Rubygems('Rubygems', 'Rubygems', 'an optional tech label', 'an optional description')
@enduml
```

