# Rubysinatra


```text
simpleicons/R/Rubysinatra
```

```text
include('simpleicons/R/Rubysinatra')
```



| Illustration | Rubysinatra |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Rubysinatra.png) | ![illustration for Rubysinatra](../../simpleicons/R/Rubysinatra.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RubysinatraXs>`
- `<$RubysinatraSm>`
- `<$RubysinatraMd>`
- `<$RubysinatraLg>`





## Rubysinatra

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Rubysinatra
include('simpleicons/R/Rubysinatra')

' renders the element
Rubysinatra('Rubysinatra', 'Rubysinatra', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rubysinatra
include('simpleicons/R/Rubysinatra')

' renders the element
Rubysinatra('Rubysinatra', 'Rubysinatra', 'an optional tech label', 'an optional description')
@enduml
```

