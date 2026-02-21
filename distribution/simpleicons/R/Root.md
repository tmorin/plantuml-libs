# Root


```text
simpleicons/R/Root
```

```text
include('simpleicons/R/Root')
```



| Illustration | Root |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Root.png) | ![illustration for Root](../../simpleicons/R/Root.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RootXs>`
- `<$RootSm>`
- `<$RootMd>`
- `<$RootLg>`





## Root

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Root
include('simpleicons/R/Root')

' renders the element
Root('Root', 'Root', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Root
include('simpleicons/R/Root')

' renders the element
Root('Root', 'Root', 'an optional tech label', 'an optional description')
@enduml
```

