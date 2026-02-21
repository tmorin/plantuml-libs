# Star


```text
fontawesome/Regular/Star
```

```text
include('fontawesome/Regular/Star')
```



| Illustration | Star |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/Star.png) | ![illustration for Star](../../fontawesome/Regular/Star.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StarXs>`
- `<$StarSm>`
- `<$StarMd>`
- `<$StarLg>`





## Star

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Star
include('fontawesome/Regular/Star')

' renders the element
Star('Star', 'Star', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Star
include('fontawesome/Regular/Star')

' renders the element
Star('Star', 'Star', 'an optional tech label', 'an optional description')
@enduml
```

