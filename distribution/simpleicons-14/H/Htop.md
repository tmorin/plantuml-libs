# Htop


```text
simpleicons-14/H/Htop
```

```text
include('simpleicons-14/H/Htop')
```



| Illustration | Htop |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Htop.png) | ![illustration for Htop](../../simpleicons-14/H/Htop.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HtopXs>`
- `<$HtopSm>`
- `<$HtopMd>`
- `<$HtopLg>`





## Htop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Htop
include('simpleicons-14/H/Htop')

' renders the element
Htop('Htop', 'Htop', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Htop
include('simpleicons-14/H/Htop')

' renders the element
Htop('Htop', 'Htop', 'an optional tech label', 'an optional description')
@enduml
```

