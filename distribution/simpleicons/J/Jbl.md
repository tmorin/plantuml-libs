# Jbl


```text
simpleicons/J/Jbl
```

```text
include('simpleicons/J/Jbl')
```



| Illustration | Jbl |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/J/Jbl.png) | ![illustration for Jbl](../../simpleicons/J/Jbl.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JblXs>`
- `<$JblSm>`
- `<$JblMd>`
- `<$JblLg>`





## Jbl

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Jbl
include('simpleicons/J/Jbl')

' renders the element
Jbl('Jbl', 'Jbl', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Jbl
include('simpleicons/J/Jbl')

' renders the element
Jbl('Jbl', 'Jbl', 'an optional tech label', 'an optional description')
@enduml
```

