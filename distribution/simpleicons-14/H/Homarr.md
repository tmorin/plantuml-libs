# Homarr


```text
simpleicons-14/H/Homarr
```

```text
include('simpleicons-14/H/Homarr')
```



| Illustration | Homarr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Homarr.png) | ![illustration for Homarr](../../simpleicons-14/H/Homarr.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HomarrXs>`
- `<$HomarrSm>`
- `<$HomarrMd>`
- `<$HomarrLg>`





## Homarr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Homarr
include('simpleicons-14/H/Homarr')

' renders the element
Homarr('Homarr', 'Homarr', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Homarr
include('simpleicons-14/H/Homarr')

' renders the element
Homarr('Homarr', 'Homarr', 'an optional tech label', 'an optional description')
@enduml
```

