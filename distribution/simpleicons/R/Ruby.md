# Ruby


```text
simpleicons/R/Ruby
```

```text
include('simpleicons/R/Ruby')
```



| Illustration | Ruby |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Ruby.png) | ![illustration for Ruby](../../simpleicons/R/Ruby.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RubyXs>`
- `<$RubySm>`
- `<$RubyMd>`
- `<$RubyLg>`





## Ruby

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ruby
include('simpleicons/R/Ruby')

' renders the element
Ruby('Ruby', 'Ruby', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ruby
include('simpleicons/R/Ruby')

' renders the element
Ruby('Ruby', 'Ruby', 'an optional tech label', 'an optional description')
@enduml
```

